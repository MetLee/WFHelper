import getopt
import sys
import multiprocessing

from wfhelper import WFHelperWrapper
from utils import adbUtil, configUtil, Log
from server import Server

if __name__ == "__main__":
    # 不写这个打包exe会出问题
    multiprocessing.freeze_support()

    isDebug = False

    serial = None
    config = None
    instance = None

    port = 8080

    try:
        _opts, args = getopt.getopt(sys.argv[1:], "-t-s:-d:-c:-p:-n")
        opts = dict(_opts)  # type: Dict[str,str]

        if "-t" in opts:
            isDebug = True

        if "-s" in opts:
            savePath = opts["-s"]
            adbUtil.setDevice(adbUtil.selectSerial())
            adbUtil.getScreen(savePath)
            Log.info("截图保存至 : {}".format(savePath))
            sys.exit()

        if "-d" in opts:
            serial = opts["-d"]

        if "-c" in opts:
            config = configUtil.getConfig(opts["-c"])

        if "-n" in opts:
            if serial is None:
                serial = adbUtil.selectSerial()
            if config is None:
                config = configUtil.selectConfig()
            instance = WFHelperWrapper(serial, config)

        if "-p" in opts:
            port = opts["-p"]
            Log.info("use port : {}".format(opts["-p"]))

        # TODO -v 参数打印log信息
    except getopt.GetoptError:
        Log.error("参数错误")
        sys.exit()

    # FIXME 为避免其他使用者造成疑惑，当前版本默认创建实例并给出警告
    if instance is None:
        Log.warning("脚本将在未来版本中取消默认启动任务并在UI中统一管理，如有需要请使用 -n 指令")

        if serial is None:
            serial = adbUtil.selectSerial()
        if config is None:
            config = configUtil.selectConfig()
        instance = WFHelperWrapper(serial, config)

    server = Server(instance, isDebug, port)
    server.run()
