const ApiConfig = {
	// user
	userModel: {
		login: 'post|Base_Manage/Home/SubmitLogin/get', //登陆
		getAllUser: 'post|user/getAllUser', //获取同事
		getAllSub: 'post|user/getsub', //获取下属
		getPublimit: 'post|user/getpublimit', //获取分类列表
		getCheckList:'post|user/GetCheckList',//获取待审核列表
		getCheckDetail:'post|user/GetCheckDetail',//待审核详情
		setCheck:'post|user/SetCheck',//审核接口
		getCheckNum:'post|user/GetCheckNum',//获取列表接口
		getBusinessCard:'post|user/GetBusinessCard',//获取卡片信息
	},
	// email
	mailModel: {
		getMailList: 'post|mail/getlist', // 获取邮件列表
		getMailDetail: 'post|mail/get', // 获取邮件内容
		getMB: 'post|mail/getMB', //获取模板
		getAllLabel: 'post|mail/getlabel', //获取标签
		createMail: 'post|mail/add', //新建邮件
		sendMail: 'post|mail/send', //发送邮件
		sendState: 'post|mail/state', //监听发送状态
		updateAccount: 'post|mail/update', //更新附件
		deleteMail: 'post|mail/delete', //删除邮件
		starMail: 'post|mail/star', //星标邮件
		redflagMail: 'post|mail/redflag', //红旗邮件
		topMail: 'post|mail/top', //置顶邮件
		moveMail: 'post|mail/move', //移动邮件
		readMail: 'post|mail/read', //读邮件
		addfolder: 'post|mail/addfolder', //新建文件夹
		isci: 'post|mail/iscl', //已处理
		recvMail: 'post|mail/recv', //邮件接受
		updateLabel: 'post|mail/Update', //更新标签
		getAllClientMail: 'post|mail/client/all', //获取客户往来邮件
		updateMail:'post|mail/update' //更新草稿
	},
	// emailbox
	mailboxModel: {
		getMailboxList: 'post|Mail_SetBox/MailBox/RootInit/get', // 获取邮箱列表
		getMailboxMenu: 'post|Mail_SetBox/MailBox/RootInit/getmenu', // 获取邮箱子目录
		getMailboxChildren: 'post|Mail_SetBox/MailBox/GetRootChildren/getmenu', // 获取邮箱子目录
		getsonroot: 'post|mailbox/getsonroot', //获取子文件夹
	},
	// 文件
	fileModel: {
		downfile: 'post|file/DownloadByType', // 下载附件
		uploadFile: 'post|file/submit', //上传附件
		getMenu: 'post|file/getmenu', //获取所有菜单
		getFileList: 'post|file/gefilelist', //获取所有文件
		getDownLoadUrl: 'post|file/downloaduri', //获取url
		getFileUrl: 'post|file/getfileuri'
	},

	//中转器
	transferModel: {
		getCompanyUrl: 'post|transfer/getCompanyUrl', //获取url前缀
		getFile: 'post|transfer/getfile', //获取下载地址
		setOpenId: 'post|transfer/updateClient'
	},
	// 客户
	clientModel: {
		getClientList: 'post|client/getList', // 获取客户
		getClientDetail: 'post|client/get', //客户详情
		getDeleteingClient: 'post|client/deleteing', //获取待删除
		getPubClassClient: 'post|client/Pubclass', //获取公海客户
		getFollowList:'post|client/GetFollowList' ,//获取客户动态
		addFollow:'post|client/SaveFollow',//新增更进
		addLinkMan:'post|client/AddLinkMan',//新增联系人
		addClient:'post|client/Add',//新增客户
	},
	//联系人
	contactModel: {
		getContactList: 'post|contact/get' //获取联系人
	},
	//日程
	workdtModel: {
		getpeding: 'post|workdt/getpeding', //获取所有日程
		updatepeding: 'post|workdt/updatepeding', //更新日程
		addpeding: 'post|workdt/addpeding', //新建日程
		
	},
	//商机
	chanceModel:{
		getList:'post|chance/getList',//商机列表
		getChanceDetail:'post|chance/get',//获取商机详情
	},
	
	//报价
	quoteModel:{
		getQuoteList:'post|quote/getQuoteList', //报价列表
		getQuoteMBList:'post|quote/GetExcelModelList',//获取报价模板列表
		getQuoteFileOrHtml: 'post|quote/GetQuoteFileOrHtml', //生成html报价
	},
	
	productModel:{
		getProductList:'post|product/GetProduct',//获取报价列表
		getProductRoot:"post|product/GetProductRoot",//获取目录
	},
	

	//系统
	systemModel: {
		getDictionary: 'post|system/dictionary/get', //获取筛选选项
	}
}

export default ApiConfig
