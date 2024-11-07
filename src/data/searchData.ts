export interface SearchResult {
  id: number;
  company: string;
  title: string;
  summary: string;
  severity: string;
  date: string;
}

export const searchData = [
    {
      id: 1,
      company: "科技创新集团",
      title: "数据泄露事件",
      summary: "发现重大安全漏洞，影响数百万用户数据安全",
      severity: "high",
      date: "2024-03-15"
    },
    {
      id: 2,
      company: "环球金融有限公司",
      title: "监管违规",
      summary: "海外业务多项合规失误",
      severity: "medium",
      date: "2024-03-14"
    },
    {
      id: 3,
      company: "智慧医疗科技",
      title: "患者数据异常访问",
      summary: "检测到未经授权的患者记录访问行为",
      severity: "high",
      date: "2024-03-13"
    },
    {
      id: 4,
      company: "新能源动力",
      title: "安全协议缺陷",
      summary: "充电站网络系统存在安全漏洞",
      severity: "medium",
      date: "2024-03-12"
    },
    {
      id: 5,
      company: "云端科技",
      title: "服务中断事件",
      summary: "云服务平台遭受DDOS攻击导致服务中断",
      severity: "high",
      date: "2024-03-11"
    },
    {
      id: 6,
      company: "智能家居科技",
      title: "设备漏洞报告",
      summary: "智能门锁系统存在远程解锁漏洞",
      severity: "high",
      date: "2024-03-10"
    },
    {
      id: 7,
      company: "数字支付集团",
      title: "支付系统异常",
      summary: "检测到可疑交易模式",
      severity: "medium",
      date: "2024-03-09"
    },
    {
      id: 8,
      company: "未来教育科技",
      title: "学生信息泄露",
      summary: "在线教育平台学生数据存在泄露风险",
      severity: "high",
      date: "2024-03-08"
    },
    {
      id: 9,
      company: "绿色能源集团",
      title: "系统漏洞",
      summary: "工业控制系统存在安全隐患",
      severity: "low",
      date: "2024-03-07"
    },
    {
      id: 10,
      company: "智慧物流科技",
      title: "定位数据异常",
      summary: "车辆追踪系统数据异常",
      severity: "low",
      date: "2024-03-06"
    },
    {
      id: 11,
      company: "苏州有限公司",
      title: "多项违规问题",
      summary: "苏州有限公司负面事件，包括客户信息泄露、财务违规操作、劳动纠纷频发，以及虚假宣传等，涉及数据安全、财务合规、劳动权益和消费者权益等方面。",
      severity: "high",
      date: "2024-11-01"
    },
    {
      id: 12,
      company: "苏州有限公司",
      title: "财务违规操作",
      summary: "该公司在审计中被发现存在虚报收入、隐瞒支出等财务违规行为。",
      severity: "medium",
      date: "2024-10-20"
    },
    {
      id: 13,
      company: "苏州有限公司",
      title: "信息泄露事件",
      summary: "苏州有限公司被曝存在数据安全漏洞，导致数千名人的个人信息外泄。",
      severity: "high",
      date: "2024-11-01"
    }
];