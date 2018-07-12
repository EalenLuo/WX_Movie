//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    movies:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 请求数据
    this.getHotMoveis();
  },
  getHotMoveis: function() {

    let thisPage = this;
    // 显示加载等待框
    wx.showToast({
      title: '拼命加载中..',
      icon: "loading",
      duration: 10000,
    })

    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      header: {
        "Content-Type": "json",
      },
      method: 'GET',
      success: function(res) {

        wx.hideToast();
        // 获取返回数据中的热映电影
        let subjects = res.data.subjects;
        console.log(subjects);        
        thisPage.setData({ movies: subjects});
      }
    })
  }

  // https://api.douban.com/v2/movie/in_theaters
})