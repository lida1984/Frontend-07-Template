/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-03-18 19:17:15
 * @LastEditors: lida
 * @LastEditTime: 2021-03-20 16:53:59
 * @FilePath: \Frontend-07-Template\Week14\JSX\animation.js
 */
// 帧的概念，  16ms 一帧
// setInterval(() => {}, 16)
// let tick = () => {
//   setTimeout(tick, 16)
// }

// let tick2 = () => {
//   // 比较合适
//   let handler = requestAnimationFrame(tick)
// }

const TICK = Symbol('tick')
const TICK_HANDLER = Symbol('tick-handler')
const ANIMATION = Symbol('animation')
const START_TIME = Symbol('start_time')
const PAUSE_START = Symbol('pause_start')
const PAUSE_TIME = Symbol('pause_time')

export class Timeline {
  constructor() {
    this.state = 'Inited' // 状态管理
    this[ANIMATION] = new Set()
    this[START_TIME] = new Map()
  }
  //   get rate() {}
  //   set rate() {
  //     // 速率
  //   }
  start() {
    if (this.state !== 'Inited') {
      return
    }
    this.state = 'Started'
    const startTime = new Date().getTime()
    this[PAUSE_TIME] = 0
    this[TICK] = () => {
      let now = Date.now()
      for (let ani of this[ANIMATION]) {
        let t
        if (this[START_TIME].get(ani) < startTime) {
          t = now - startTime - this[PAUSE_TIME] - ani.delay
        } else {
          t = now - this[START_TIME].get(ani) - this[PAUSE_TIME] - ani.delay
        }
        if (t > ani.duration) {
          this[ANIMATION].delete(ani)
          t = ani.duration
        }
        if (t > 0) {
          ani.receriveTime(t)
        }
      }
      this[TICK_HANDLER] = requestAnimationFrame(this[TICK])
    }

    this[TICK]()
  }
  pause() {
    if (this.state !== 'Started') {
      return
    }
    this.state = 'Paused'
    this[PAUSE_START] = Date.now()
    cancelAnimationFrame(this[TICK_HANDLER])
  }
  resume() {
    if (this.state !== 'Paused') {
      return
    }
    this.state = 'Started'
    // 恢复
    this[PAUSE_TIME] += Date.now() - this[PAUSE_START]
    this[TICK]()
  }

  reset() {
    // 重启
    this.state = 'Inited'
    this.pause()
    this[ANIMATION] = new Set()
    this[START_TIME] = new Map()
    const startTime = new Date().getTime()
    this[PAUSE_TIME] = 0
    this[PAUSE_START] = 0
    this[TICK_HANDLER] = null
  }
  add(animation, start = Date.now()) {
    this[ANIMATION].add(animation)
    this[START_TIME].set(animation, start)
  }
}

export class Animation {
  constructor(
    object,
    property,
    startValue,
    endValue,
    duration, // ms
    delay, // ms
    timingFunciton,
    template
  ) {
    timingFunciton = timingFunciton || ((v) => v)
    template = template || ((v) => v)
    this.object = object
    this.property = property
    this.startValue = startValue
    this.endValue = endValue
    this.duration = duration
    this.delay = delay
    this.timingFunciton = timingFunciton
    this.template = template
  }
  receriveTime(time) {
    console.log(time)
    let range = this.endValue - this.startValue
    let progress = this.timingFunciton(time / this.duration)
    this.object[this.property] = this.template(
      this.startValue + range * progress
    )
  }
}
