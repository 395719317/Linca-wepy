import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
//const apiMall = 'https://fygtest.nitago.com/';
const apiMall = 'https://www.gopingtan.com/';
////const apiMall = '192.168.2.134:9090'
// const apiMall = 'http://localhost:8080/'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + 'goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "api/wechat/jscode2session");
const user2session = (params) => wxRequest(params, apiMall + "api/wechat/user2session?jsoncallback=?");

//商品接口---begin
//首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiMall + 'api/home/hostGoodsList');
const getHomeDisvocerList = (params) => wxRequest(params, apiMall + 'api/mall/discoverList');
//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiMall + 'api/wxapp/prods.php?do=searchGoodsList');

//查询商品详情信息
const goodsDetail = (params) => wxRequest(params, apiMall + 'api/mall/goods');
//商品加入购物车
const addCart = (params) => wxRequest(params, apiMall + 'api/mall/goodsCart/add');
//用户的购物车商品列表
const cartList = (params) => wxRequest(params, apiMall + 'api/mall/goodsCart/list');
//购物车的商品选中状态
const cartCheck = (params) => wxRequest(params, apiMall + 'api/mall/goodsCart/check');
//购物车的商品选中状态(全选)
const cartCheckAll = (params) => wxRequest(params, apiMall + '/mall/goodsCart/checkAll');
//购物车的商品删除
const cartDel = (params) => wxRequest(params, apiMall + 'api/mall/goodsCart/delete');
//购物车的商品数量更新
const cartUpdateNum = (params) => wxRequest(params, apiMall + 'api/mall/goodsCart/updateNum');
//直接购买商品
const preOrder = (params) => wxRequest(params, apiMall + 'api/mall/goodsOrder/commitData');

//支付前生成订单
const saveByCart = (params) => wxRequest(params, apiMall + 'api/mall/goodsOrder/saveByCart');

//支付统一下单
const toPay = (params) => wxRequest(params, apiMall + '/wepay/toPay');

//商品收藏
const goodsFavorite = (params) => wxRequest(params, apiMall + 'api/mall/goodsFavorite/add');

//商品收藏删除
const goodsUnFavorite = (params) => wxRequest(params, apiMall + 'api/mall/goodsFavorite/delete');

//商品是否已收藏
const goodsIsFavorite = (params) => wxRequest(params, apiMall + 'api/mall/goodsFavorite/goodsIsFavorite');

//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + 'api/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiMall + 'api/userSign/doSign');
//获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiMall + 'api/userSign/getSignDate');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiMall + 'api/userPoint/pointInfo');

//用户足迹信息
const browseInfo = (params) => wxRequest(params, apiMall + 'api/userBrowse/browseInfo');
//添加用户足迹
const addBrowser = (params) => wxRequest(params, apiMall + 'api/userBrowse/add');
//添加用户足迹
const delUserBrowser = (params) => wxRequest(params, apiMall + 'api/userBrowse/delete');

//用户收藏的商品
const favoriteInfo = (params) => wxRequest(params, apiMall + 'api/goodsFavorite/favoriteInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiMall + 'api/systemMessage/messageInfo');

//用户手机绑定
const registerUser = (params) => wxRequest(params, apiMall + 'api/userCenter/register');
//发送短信
const sendRandCode = (params) => wxRequest(params, apiMall + 'api/sms/send');

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + 'api/userCenter/getUserInfo');

//用户收货地址
const getUserAddress = (params) => wxRequest(params, apiMall + 'api/receiverInfo/list');

//保存用户收货地址
const saveAddress = (params) => wxRequest(params, apiMall + 'api/receiverInfo/saveOrUpdate');

//用户收货地址根据id查询
const receiverInfoById = (params) => wxRequest(params, apiMall + 'api/receiverInfo/receiverInfoById');

//根据Id删除收货地址
const delUserAddress = (params) => wxRequest(params, apiMall + 'api/receiverInfo/operation');

//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + 'api/searchkeyword/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + 'api/searchkeyword/list');
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + 'api/searchkeyword/clear');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + 'api/mall/goodsOrder/getMyOrderList');

//查询我的订单数量
const getMyOrderSize = (params) => wxRequest(params, apiMall + 'api/mall/goodsOrder/getMyOrderSize');

//根据订单号查询详情
const getPayOrderDetail = (params) => wxRequest(params, apiMall + 'api/mall/goodsOrder/getPayOrderDetail');

//根据订单号查询详情
const editOrderInfo = (params) => wxRequest(params, apiMall + 'api/mall/goodsOrder/opt');

//根据订单号查询物流
const orderExpressInfo = (params) => wxRequest(params, apiMall + 'api/orderExpress/orderExpressInfo');

//查询用户的已订购产品
const goodsUserOrderList = (params) => wxRequest(params, apiMall + 'api/mall/goodsOrder/goodsUserOrderList');

//退货操作
const refundApply = (params) => wxRequest(params, apiMall + 'api/mall/refund/saveRefundApply');

//用户相关信息--end

//商品分类--begin
//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + 'api/wxapp/category.php?do=rootCategoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + 'api/wxapp/category.php?do=childCatetoryList');
//商品分类--end

//查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + 'api/wxapp/index.php?do=adverts');

//首页商品列表展示
const getProductList = (params) => wxRequest(params, apiMall + 'api/wxapp/index.php?do=infoList');

//登录得到code抛给后台
const getOpenId= (params) => wxRequest(params, apiMall + 'api/wxapp/user.php?do=login');

//登录
const getLogin= (params) => wxRequest(params, apiMall + 'api/wxapp/user.php?do=register');

//得到短信验证码
const getTelCode= (params) => wxRequest(params, apiMall + 'api/wxapp/user.php?do=telcode');

//商品详情接口
const getPdDetail= (params) => wxRequest(params, apiMall + 'api/wxapp/prods.php?do=goodsinfo');

//商品规格接口
const getPdSpeDetail= (params) => wxRequest(params, apiMall + 'api/wxapp/prods.php?do=productinfo');

//添加购物车
const addCarts= (params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=addcarts');

//查看购物车
const getCarts= (params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=getcarts');

//删除购物车
const delCarts=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=delcarts');

//修改购物车
const addCartsNum=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=addcarts_num');

//新增编辑收货地址
const addAddress=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=addform');

//获取收货人地址
const getAddress=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=getaddsform');

//下单购买支付
const addOrderBuy=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=addorder_buy');

//订单界面支付
const wxBuy=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=wx_buy');

//购买信息
const buyDetail=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=buy');

//删除地址
const delAddress=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=adds_del');

//得到订单列表
const getOrderList=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=get_order');

//获取单个订单详情
const getOrderInfo=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=get_order_info');

//进行申请售后的数据
const getAfterSale=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=order_case');

//申请售后
const addAfterSale=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=addcase');

//售后详情页
const caseInfo=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=caseinfo');

//取消订单
const cancelOrder=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=order_cancel');

//订单页支付
const orderBuy=(params) => wxRequest(params, apiMall + 'api/wxapp/order.php?do=wx_buy');

export default {
  apiMall,
  hostGoodsList,
  getDiscoverList,
  getHomeDisvocerList,
  getGoodsList,
  goodsDetail,
  wxJsCode2Session,
  user2session,
  userSginInfo,
  doSign,
  addCart,
  cartList,
  cartCheck,
  cartCheckAll,
  cartDel,
  cartUpdateNum,
  preOrder,
  refundApply,
  pointInfo,
  browseInfo,
  addBrowser,
  delUserBrowser,
  favoriteInfo,
  messageInfo,
  registerUser,
  sendRandCode,
  getUserInfo,
  getUserAddress,
  saveAddress,
  receiverInfoById,
  getUserAddress,
  addSearchKeyword,
  searchKeywordList,
  clearSearchKeyword,
  getMyOrderList,
  saveByCart,
  toPay,
  rootCtegoryList,
  childGoodsCatetoryList,
  getOrderInfo,
  editOrderInfo,
  goodsUserOrderList,
  orderExpressInfo,
  delUserAddress,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  getMyOrderSize,
  getPayOrderDetail,
  getAdList,
  getSignDate,
  getProductList,
  getOpenId,
  getLogin,
  getTelCode,
  getPdDetail,
  getPdSpeDetail,
  addCarts,
  getCarts,
  delCarts,
  addCartsNum,
  addOrderBuy,
  wxBuy,
  buyDetail,
  getAddress,
  addAddress,
  delAddress,
  addAfterSale,
  getAfterSale,
  getOrderList,
  cancelOrder,
  orderBuy,
  caseInfo
}
