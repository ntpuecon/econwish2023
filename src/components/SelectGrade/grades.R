gradesBA=c("一","二","三","四")
gradesMA=c("一","二")
paste0(
    "經",rep(gradesBA,each=2), c("A","B")
) |>
jsonlite::toJSON() 

teacherEmails <- "Shi-Miin Liu <shimiin@mail.ntpu.edu.tw>, 陳欽賢 <stan@mail.ntpu.edu.tw>, hchen <hchen@mail.ntpu.edu.tw>, 官德星 <guan@mail.ntpu.edu.tw>, 方振瑞 <roger@mail.ntpu.edu.tw>, 簡明哲 <mcchien@mail.ntpu.edu.tw>, Shiou Shieh <sshieh@mail.ntpu.edu.tw>, 李叢禎 <tclee@gm.ntpu.edu.tw>, 郭文忠 <guowc@gm.ntpu.edu.tw>, Chien-Ho Wang <Wangchi3@mail.ntpu.edu.tw>, 陳俊志 <jzchen@mail.ntpu.edu.tw>, 盈臻 Chen <shchen@mail.ntpu.edu.tw>, 盧佳慧 <chlu@mail.ntpu.edu.tw>, 茂廷林 <mtlin@mail.ntpu.edu.tw>, 程智男 <cnchen@mail.ntpu.edu.tw>, \"vivien@mail.ntpu.edu.tw\" <vivien@mail.ntpu.edu.tw>, \"evans@mail.ntpu.edu.tw\" <evans@mail.ntpu.edu.tw>, \"lsjane@mail.ntpu.edu.tw\" <lsjane@mail.ntpu.edu.tw>, 經濟學系助理教授湯蕙瑄 <htang@mail.ntpu.edu.tw>, 王宜甲 <ycwang@mail.ntpu.edu.tw>, 劉德芝 <steveliu@mail.ntpu.edu.tw>, 黃琪斐 <chifei@mail.ntpu.edu.tw>, 邱敬淵 <jychioua@mail.ntpu.edu.tw>, 朱紀仰 <cchu@mail.ntpu.edu.tw>, 殷壽鏞 <syyin@mail.ntpu.edu.tw>, 王胤琪 <yinwang@mail.ntpu.edu.tw>, 陳文豪 <whchen20@mail.ntpu.edu.tw>, 鄭仲棠 <ctcheng@gm.ntpu.edu.tw>, 汪澤民 <wangtsemin@gm.ntpu.edu.tw>, 蘇芃竹 <apjs@gm.ntpu.edu.tw>, 陳妍蒨 <yenchien@gm.ntpu.edu.tw>, 陳俊廷 <chuntingchen@gm.ntpu.edu.tw>"