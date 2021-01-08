// 手机 电话卡
$('.commodity-ipone').on('mouseenter', function () {
    $.ajax({
        url: "./js/ipone.json",
        method: 'get',
        dataType: 'json',
        success: function (data) {
            $('.children-list-col-1').empty()
            data.forEach(function (item) {
                $(`<li class="children-list-li">
                <a href="#" class="link "> 
                    <img src="${item.print}" alt="">
                    <span>${item.name}</span>
                    </a>  
                    </li>`).appendTo($('.children-list-col-1'))
            });
            $('.children-col-4').css({ 'display': 'block' })

            $('.commodity-ipone').on('mouseleave', function () {
                $('.children-col-4').css({ 'display': 'none' })
            })

        }

    })
})
//电视 盒子
$('.commodity-television').on('mouseenter', function () {
    $.ajax({
        url: "./js/television.json",
        method: 'get',
        dataType: 'json',
        success: function (data) {
            $('.children-list-col-1').empty()
            data.forEach(function (item) {
                $(`<li class="children-list-li">
                <a href="#" class="link "> 
                    <img src="${item.print}" alt="">
                    <span>${item.name}</span>
                    </a>  
                    </li>`).appendTo($('.children-list-col-1'))
            });
            $('.children-col-4').css({ 'display': 'block' })

            $('.commodity-television').on('mouseleave', function () {
                $('.children-col-4').css({ 'display': 'none' })
            })

        }

    })
})




//手机ajax
$.ajax({
    url: './js/mobile-phone.json',
    dataType: "json",
    method: 'get',
    success: function (data) {

        data.forEach(item => {
            $(`
                <li class="brick-item ipone-item-m-2">
                                    <a href="./html/Detail.html">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                        </p>
                                    </a>
                                </li>
                `).appendTo($('.span6-u'))
        });
    }
})

//家电
//热门
$.ajax({
    url: './js/hot.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {

        data.forEach(item => {
            $(`
                <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
                `).appendTo($('.Appliancesspan6-hot'))

        })
        $('.Appliances-hot-title').on('mouseenter', function () {
            $('.Appliancesspan6-hot').css({ 'display': 'block' }),
                $('.Appliancesspan6-movie').css({ 'display': 'none' })
            $('.Appliances-movie-title').removeClass('highlighted');
            $('.Appliances-hot-title').addClass('highlighted')
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e5f89adf98ab3fccb34012b5209cd58.jpg?thumb=1&w=100&h=100&f=webp&q=90" alt="">
                               </div>
                               <h3 class="title">米家互联网烟灶套装（天然气）</h3>
                               <p class="price">1999元</p>
                           </a>
                       </li>`
        ).appendTo('.Appliancesspan6-hot')

    }
})

//电视影音
$.ajax({
    url: './js/Movie.json',
    dataType: "json",
    method: 'get',
    success: function (data) {

        data.forEach(item => {
            $(`
                <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
                `).appendTo($('.Appliancesspan6-movie'))

            $('.Appliances-movie-title').on('mouseenter', function () {
                $('.Appliancesspan6-hot').css({ 'display': 'none' }),
                    $('.Appliancesspan6-movie').css({ 'display': 'block' })
                $('.Appliances-movie-title').addClass('highlighted')
                $('.Appliances-hot-title').removeClass('highlighted');
            })
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://i8.mifile.cn/b2c-mimall-media/b6314e555f351179ee55caf36e23c8fc!100x100.jpg" alt="">
                               </div>
                               <h3 class="title">小米盒子4C</h3>
                               <p class="price">199元</p>
                           </a>
                       </li>`
        ).appendTo('.Appliancesspan6-movie')
    }
})

//智能
//热门
$.ajax({
    url: './js/smart-hot.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {
        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.smart-hot'))
        })
        $('.smart-hot-title').on('mouseenter', function () {
            $('.smart-trip').css({ 'display': 'none' }),
                $('.smart-security').css({ 'display': 'none' })
            $('.smart-hot').css({ 'display': 'block' })
            $('.smart-hot-title').addClass('highlighted')
            $('.smart-trip-title').removeClass('highlighted');
            $('.smart-security-title').removeClass('highlighted');
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec0ec7692ba005710d1887262559609c.jpg?thumb=1&w=100&h=100&f=webp&q=90" alt="">
                               </div>
                               <h3 class="title">小米手环5</h3>
                               <p class="price">179元</p>
                           </a>
                       </li>`
        ).appendTo('.smart-hot')
    }
})
//安防
$.ajax({
    url: './js/smart-security.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {

        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.smart-security'))
        })
        $('.smart-security-title').on('mouseenter', function () {

            $('.smart-trip').css({ 'display': 'none' }),
                $('.smart-hot').css({ 'display': 'none' })
            $('.smart-security').css({ 'display': 'block' })
            $('.smart-security-title').addClass('highlighted')
            $('.smart-trip-title').removeClass('highlighted');
            $('.smart-hot-title').removeClass('highlighted');
        })

    }
})
//出行
$.ajax({
    url: './js/smart-trip.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {

        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.smart-trip'))
        })
        $('.smart-trip-title').on('mouseenter', function () {

            $('.smart-security').css({ 'display': 'none' }),
                $('.smart-hot').css({ 'display': 'none' })
            $('.smart-trip').css({ 'display': 'block' })
            $('.smart-trip-title').addClass('highlighted')
            $('.smart-security-title').removeClass('highlighted');
            $('.smart-hot-title').removeClass('highlighted');
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=100&h=100" alt="">
                               </div>
                               <h3 class="title">九号平衡车</h3>
                               <p class="price">1999元</p>
                           </a>
                       </li>`
        ).appendTo('.smart-trip')
    }
})

//搭配
//热门
$.ajax({
    url: './js/match-hot.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {
        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.match-hot'))
        })
        $('.match-hot-title').on('mouseenter', function () {
            $('.match-headset').css({ 'display': 'none' })
            $('.match-hot').css({ 'display': 'block' })
            $('.match-hot-title').addClass('highlighted')
            $('.match-headset-title').removeClass('highlighted')
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&w=100&h=100&f=webp&q=90" alt="">
                               </div>
                               <h3 class="title">小米小爱触屏音箱</h3>
                               <p class="price">199元</p>
                           </a>
                       </li>`
        ).appendTo('.match-hot')
    }
})
//音箱耳机
$.ajax({
    url: './js/match-headset.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {

        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.match-headset'))
        })
        $('.match-headset-title').on('mouseenter', function () {
            $('.match-hot').css({ 'display': 'none' })
            $('.match-headset').css({ 'display': 'block' })
            $('.match-headset-title').addClass('highlighted')
            $('.match-hot-title').removeClass('highlighted')
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/b474f7bb-10e1-ee92-f78f-d87231b0726a.jpg?thumb=1&w=100&h=100" alt="">
                               </div>
                               <h3 class="title">小米AI音箱</h3>
                               <p class="price">199元</p>
                           </a>
                       </li>`
        ).appendTo('.match-headset')
    }
})

//配件
//热门
$.ajax({
    url: './js/parts-hot.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {
        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.parts-hot'))
        })
        $('.parts-hot-title').on('mouseenter', function () {
            $('.parts-charger').css({ 'display': 'none' })
            $('.parts-hot').css({ 'display': 'block' })
            $('.parts.hot-title').addClass('highlighted')
            $('.parts-charger-title').removeClass('highlighted')
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fffc0a962387dff2f70aeb009ddf69ff.jpg?thumb=1&w=100&h=100&f=webp&q=90" alt="">
                               </div>
                               <h3 class="title">小米车载充电器快充版1A1C 100W</h3>
                               <p class="price">99元</p>
                           </a>
                       </li>`
        ).appendTo('.parts-hot')
    }
})
//充电器
$.ajax({
    url: './js/parts-charger.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {
        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.parts-charger'))
        })
        $('.parts-charger-title').on('mouseenter', function () {
            $('.parts-hot').css({ 'display': 'none' })
            $('.parts-charger').css({ 'display': 'block' })
            $('.parts.charger-title').addClass('highlighted')
            $('.parts-hot-title').removeClass('highlighted')
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4b3bff030170ad1a07dfb50311352c9.jpg?thumb=1&w=100&h=100&f=webp&q=90" alt="">
                               </div>
                               <h3 class="title">小米USB充电器65W 快充版（2A1C）</h3>
                               <p class="price">99元</p>
                           </a>
                       </li>`
        ).appendTo('.parts-charger')
    }
})

//周边
//热门
$.ajax({
    url: './js/circum-hot.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {
        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.circum-hot'))
        })
        $('.circum-hot-title').on('mouseenter', function () {
            $('.circum-trip').css({ 'display': 'none' })
            $('.circum-hot').css({ 'display': 'block' })
            $('.circum-hot-title').addClass('highlighted')
            $('.circum-trip-title').removeClass('highlighted')
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1062daf42a1a5b2a9108510ecf83d0b.jpg?thumb=1&w=100&h=100&f=webp&q=90" alt="">
                               </div>
                               <h3 class="title">MIJOY 唱片机车载香薰</h3>
                               <p class="price">49元</p>
                           </a>
                       </li>`
        ).appendTo('.circum-hot')
    }
})
//出行
$.ajax({
    url: './js/circum-trip.json',
    dataType: 'json',
    method: 'get',
    success: function (data) {
        data.forEach(item => {
            $(`
            <li class="brick-item ipone-item-m-2">
                                    <a href="#">
                                        <div class="brick-item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <h3 class="title">${item.mobile}</h3>
                                        <p class="desc">${item.deploy}</p>
                                        <p class="price">
                                            <span>${item.price}</span>
                                            <del class="del-price">${item.parity}</del>
                                        </p>
                                    </a>
                                </li>
            `).appendTo($('.circum-trip'))
        })
        $('.circum-trip-title').on('mouseenter', function () {
            $('.circum-hot').css({ 'display': 'none' })
            $('.circum-trip').css({ 'display': 'block' })
            $('.circum-trip-title').addClass('highlighted')
            $('.circum-hot-title').removeClass('highlighted')
        })
        $(` <li class="brick-item brick-item-s">
                           <a href="#">
                               <div class="figure-img">
                                   <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9871569c0b49b769bd74f5cce81e45a.jpg?thumb=1&w=100&h=100&f=webp&q=90" alt="">
                               </div>
                               <h3 class="title">米家经典方框太阳镜</h3>
                               <p class="price">89元</p>
                           </a>
                       </li>`
        ).appendTo('.circum-trip')
    }
})



