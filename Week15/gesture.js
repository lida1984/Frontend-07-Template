/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-03-22 19:50:06
 * @LastEditors: lida
 * @LastEditTime: 2021-03-29 15:33:34
 * @FilePath: \Frontend-07-Template\Week15\gesture.js
 */

/// 分发事件
export class Dispatcher {
  constructor(element) {
    this.element = element
  }
  dispatch(type, properties) {
    let event = new Event(type)
    for (let name in properties) {
      event[name] = properties[name]
    }
    this.element.dispatchEvent(event)
  }
}

// listen => recoginize => dispatch

export class Listener {
  constructor(element, recognizer) {
    let isListeningMouse = false
    let contexts = new Map()

    element.addEventListener('mousedown', (event) => {
      console.log(
        (event.button == 0 ? '左键' : event.button === 2 ? '右键' : '中间建') +
          ' mousedown',
        event
      )
      let context = Object.create(null)
      contexts.set('mouse' + (1 << event.button), context)
      recognizer.start(event, context)
      let mousemove = (e) => {
        let button = 1
        while (button <= e.buttons) {
          if (button & e.buttons) {
            let key // order of buttons
            if (button === 2) {
              key = 4
            } else if (button === 4) {
              key = 2
            } else {
              key = button
            }
            let context = contexts.get('mouse' + key)
            recognizer.move(e, context)
          }
          button = button << 1
        }
      }
      let mouseup = (e) => {
        console.log(
          (event.button == 0
            ? '左键'
            : event.button === 2
            ? '右键'
            : '中间建') + ' mouseup',
          e
        )
        contexts.get('mouse' + (1 << e.button))
        recognizer.end(e, contexts.get('mouse' + (1 << e.button)))
        contexts.delete('mouse' + (1 << e.button))
        if (e.buttons === 0) {
          document.removeEventListener('mousemove', mousemove)
          document.removeEventListener('mouseup', mouseup)
          isListeningMouse = false
        }
      }
      if (!isListeningMouse) {
        document.addEventListener('mousemove', mousemove)
        document.addEventListener('mouseup', mouseup)
        isListeningMouse = true
        console.log('开始监听鼠标事件')
      }
    })
    // 移动端
    element.addEventListener('touchstart', (event) => {
      for (let touch of event.changedTouches) {
        let context = Object.create(null)
        contexts.set(touch.identifier, context)
        recognizer.start(touch, context)
      }
    })
    element.addEventListener('touchmove', (event) => {
      for (let touch of event.changedTouches) {
        recognizer.move(touch, contexts.get(touch.identifier))
      }
    })
    element.addEventListener('touchend', (event) => {
      for (let touch of event.changedTouches) {
        recognizer.end(touch, contexts.get(touch.identifier))
        contexts.delete(touch.identifier)
      }
    })
    element.addEventListener('touchcancel', (event) => {
      // 异常打断move
      for (let touch of event.changedTouches) {
        recognizer.cancel(touch, contexts.get(touch.identifier))
        contexts.delete(touch.identifier)
      }
    })
  }
}

export class Recognizer {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }

  start(point, context) {
    context.startX = point.clientX
    context.startY = point.clientY

    // 存入数个点，计算平均速度
    context.points = [
      {
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
      }
    ]

    context.isPan = false
    context.isTap = true
    context.isPress = false
    context.handler = setTimeout(() => {
      // start 开始超过 0.5s 就是 press 事件
      context.isPan = false
      context.isTap = false
      context.isPress = true
      context.handler = null
      console.log('presstart')
      this.dispatcher.dispatch('press', {})
    }, 500)
  }
  move(point, context) {
    let dx = point.clientX - context.startX
    let dy = point.clientY - context.startY
    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
      // start/press 移动超过 10px  属于 pan 事件
      context.isPan = true
      context.isTap = false
      context.isPress = false
      context.isVertical = Math.abs(dx) < Math.abs(dy)
      clearTimeout(context.handler)
      console.log('panstart')
      this.dispatcher.dispatch('panstart', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical
      })
    }
    if (context.isPan) {
      console.log('pan')
      this.dispatcher.dispatch('pan', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: Math.abs(dx) < Math.abs(dy)
      })
    }

    // 存入点
    context.points = context.points.filter(
      (point) => Date.now() - point.t < 500
    )
    context.points.push({
      t: Date.now(),
      x: point.clientX,
      y: point.clientY
    })
  }
  end(point, context) {
    if (context.isTap) {
      console.log('tap')
      this.dispatcher.dispatch('tap')
      clearTimeout(context.handler)
    }

    if (context.isPress) {
      console.log('pressend')
      this.dispatcher.dispatch('pressend')
    }

    // 计算速度
    context.points = context.points.filter(
      (point) => Date.now() - point.t < 500
    )
    if (!context.points.length) return 0
    let distance = Math.sqrt(
      (point.clientX - context.points[0].x) ** 2 +
        (point.clientY - context.points[0].y) ** 2
    )
    let v = distance / (Date.now() - context.points[0].t)
    context.isFlick = false
    if (v > 1.5) {
      console.log('flick')
      context.isFlick = true
      this.dispatcher.dispatch('flick', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
        v: v
      })
    }
    console.log(context)

    if (context.isPan) {
      console.log('panend')
      this.dispatcher.dispatch('panend', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick
      })
    }
  }

  cancel(point, context) {
    clearTimeout(context.handler)
    this.dispatcher.dispatch('cancel', {})
  }
}

//
export function enableGesture(element) {
  return new Listener(element, new Recognizer(new Dispatcher(element)))
}
