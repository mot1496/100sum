/********************** */
/* ストップウォッチクラス */
/********************** */
class Stopwatch {
  constructor(){
    this.state            = 'initial';
    this.startedTimePoint = 0;
    this.offsetTime       = 0; /* スタートからストップまでの時間 */
    this.time_ms          = 0; /* 時間ミリ秒 */
  }
  start(){
    if(this.state == 'initial' || this.state == 'stop') {
      this.state = 'start';
      this.startedTimePoint = new Date().getTime();
    }
    this.time_ms = new Date().getTime() - this.startedTimePoint + this.offsetTime;
  }
  getTime(){
    // 秒とミリ秒に分ける
    const remaining_sec = Math.floor(this.time_ms / 1000);
    const mseconds      = this.time_ms % 1000;
    // 分と秒に分ける
    const remaining_min = Math.floor(remaining_sec / 60);
    const seconds       = remaining_sec % 60;
    // 時間と分に分ける
    const hours   = Math.floor(remaining_min / 60);
    const minutes = remaining_min % 60;
    // 出力フォーマット
    return ('0' + hours).slice(-2)   + ':' + 
           ('0' + minutes).slice(-2) + ':' + 
           ('0' + seconds).slice(-2) + '.' + 
           ('00'+ mseconds).slice(-3);
  }
  stop(){
    if(this.state == 'start') {
      this.state = 'stop';
      /* ↓ スタートしてからストップするまでの時間をoffsetTimeに加算する */
      this.offsetTime += new Date().getTime() - this.startedTimePoint;
    }
  }
  reset(){
    this.offsetTime = 0;
    this.state      = 'initial'
  }
} 