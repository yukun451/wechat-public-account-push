/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb36e7825ff5e5ce8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7e618e4a3b9bbad5cddc47581aab065e',

  PROVINCE: '泉州',
  CITY: '惠安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '梅梅宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olgmS6s7eBKLgSw6xHqeafAZAM60',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0l_gsbXAQqT2vZ7rPYcMT-P7agkUbNmUlJgHBOR-xLw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-23',
      openUrl: 'https://xiayigejiaqi.com',
      festivals: [

        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '美丽可爱亲亲老婆', year: '1996', date: '11-23',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2021', date: '03-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-03-14' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-01-27' },
      ],
    }, 
    {
      // 想要发送的人的名字
      name: 'yukun',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olgmS6sJ6LldCuzA1qfqVSxr-8NI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0l_gsbXAQqT2vZ7rPYcMT-P7agkUbNmUlJgHBOR-xLw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-23',
      openUrl:'https://xiayigejiaqi.com',
      festivals: [
         //注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '美丽可爱亲亲老婆', year: '1996', date: '11-23',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2021', date: '03-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-03-14' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-01-27' },
      ],
    },
  ],

  courseSchedule:  [
      // 例子，周一的课表
      [
        '09:10-09:50 数学',
        '17:10-17:30 越野跑',
        '19:50-20:30 数学'
      ],
      // 周二
      [
        '08:20-09:00 数学',
        '14:50-15:30 数学',
        '17:10-17:30 越野跑'
      ],
      // 周三
      [
        '08:20-09:00 数学',
        '09:10-09:50 数学',
        '17:10-17:30 越野跑',
        '19:50-20:30 数学'
      ],
      // 周四
      [
        '09:10-09:50 数学',
        '17:10-17:30 越野跑',
        '19:00-19:40 班会'
      ],
      // 周五
      [
        '09:10-09:50 数学',
        '16:15-18:20 回家'
      ],
      [],
      []

  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'yitgePmNudV9tzFRd8YMcsAbGzMEME-Gghzmalpx5xM',

  CALLBACK_USERS: [
    {
      name: '于坤',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olgmS6sJ6LldCuzA1qfqVSxr-8NI',
    }
  ],

}

module.exports = USER_CONFIG

