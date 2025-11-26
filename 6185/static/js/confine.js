try { document.domain = ''; } catch (e) { }
$.json = function (url, data, success, ignoreerr, sync, processdata) {
	var w = sync == true && $('iframe#crossframe').length > 0 ? $('iframe#crossframe')[0].contentWindow : window;
	w.$.ajax({
		type: "POST",
		url: url,
		cache: false,
		async: (typeof sync == 'undefined') ? true : !sync,
		data: data,
		success: function (r) { if (typeof success == 'function') success(r); },
		error: function (xhr, ts, tr) {
			if (typeof ignoreerr != 'undefined' && ignoreerr) return;
			var s = null;
			if (ts == 'timeout') s = ts;
			else if (ts == 'error') s = xhr.status;
			switch (s) {
				case 404: alert(_g.lang.show('操作失败，请刷新页面重新尝试！', 'Operation failed, please refresh the page and try again!')); break;
				case 500: alert(_g.lang.show('操作失败，服务器出现了错误！', 'Operation failed, server error occurred!')); break;
				case 'timeout': alert(_g.lang.show('操作超时！', 'Operation timeout!')); break;
				default: alert(_g.lang.show('操作失败，可能网络出现错误！', 'Operation failed, may be an error on the network!'));
			}
		},
		//timeout: 5000,
		dataType: 'json',
		processData: (typeof processdata == 'undefined') ? true : processdata
	});
}

$(function () {
	$(window)
		.scroll(function () {
			(function () {
				var d = 0.0;
				$('.g_animation:visible:not(.reset)').each(function () {
					var t = $(this);
					if (_g.viewport.$in(t, t.is('.translate,.translatex,.translate-x') ? 250 : -50)) {
						t.css('transition-delay', d + 's').addClass('reset');
						d += 0.2;
					}
				});
				if (d > 0) _g.delay(d * 1000, function () { $('.g_animation.reset').css('transition-delay', ''); });
			})();

			if ($('html').hasClass('um')) {
				$('.g_page:visible').each(function () {
					var t = $(this);
					if (t.attr('s')) return;
					if (t.offset().top - ($(window).scrollTop() + $(window).height()) <= 30) t.trigger('next');
				});

				if ($(document).height() - ($(window).scrollTop() + $(window).height()) < 100) $('.g_tool').addClass('show'); else $('.g_tool').removeClass('show');
			}

			if ($(window).scrollTop() > 50) $('.g_tool a.top').addClass('show'); else $('.g_tool a.top').removeClass('show');
		})
		.resize(function () {
			$('.g_listclip').each(function () { _g.listclip($(this)); });
			$('.g_content:visible').each(function () {
				$(this).find('img').css({ maxWidth: '100%', height: 'auto' }); //正文图片溢出处理
			});
			$(window).scroll();
		})
	;
	$(document)
		.on('touchend click', function () {
			_g.shelter.remove();
		});

	$('.g_tool a.msg').click(function () {
		if ($('form[book]:visible').length) $('form[book]:visible input[type=text]:first').focus();
		else {
			_g.shelter.box(_g.take($('<div class="g_book"><form onsubmit="return false;" book>\
			<p class="title">' + _g.lang.show('给我留言', 'Leave a message') + '</p>\
			<table>\
				<tr>\
					<td width="50%"><input type="text" name="name" maxlength="20" placeholder="' + _g.lang.show('姓名', 'Name') + '" /></td>\
					<td width="50%"><input type="tel" name="phone" maxlength="20" placeholder="' + _g.lang.show('电话', 'Phone') + '" /></td>\
				</tr>\
				<tr>\
					<td colspan="2"><input type="text" name="email" maxlength="200" placeholder="' + _g.lang.show('邮箱(选填)', 'Email(optional)') + '" /></td>\
				</tr>\
				<tr valign="top">\
					<td colspan="2">\
						<textarea name="body" maxlength="500" placeholder="' + _g.lang.show('留言内容(不超过500字符)', 'Content (no more than 500 characters)') + '"></textarea>\
					</td>\
				</tr>\
				<tr class="b">\
					<td colspan="2"><input type="submit" value="' + _g.lang.show('提交', 'Submit') + '" class="btn g_ease" /></td>\
				</tr>\
			</table>\
		</form></div>')).on('touchend click', function () { (window.event || arguments.callee.caller.arguments[0]).stopPropagation(); }));
		}
	});

	$('.g_tool a.top').click(function () { _g.scroll(0); });


	_g.take($(document));

	$(document.body).append($('<script>if (typeof $ != \'undefined\') $(function () { if (typeof _g != \'undefined\') { _g.finish(function () { $(window).scroll(); }); _g.finish(); }});</script>'));
});

(function () {
	$(window).resize(function () { if (/Pad/i.test(navigator.userAgent) || $(window).width() <= 600) $('html').addClass('um'); else $('html').removeClass('um'); }).resize();
	var _g = {
		me: true,
		lang: {
			code: '',
			show: function (def, en) {
				switch (this.code) {
					case 'en': return en;
					default: return def;
				}
			}
		},
		viewport: {
			belowthefold: function (element, settings) {
				var fold;
				if (settings.container === undefined || settings.container === window) fold = (window.innerHeight ? window.innerHeight : $(window).height()) + $(window).scrollTop();
				else fold = $(settings.container).offset().top + $(settings.container).height();
				return fold <= $(element).offset().top - settings.threshold;
			},
			rightoffold: function (element, settings) {
				var fold;
				if (settings.container === undefined || settings.container === window) fold = $(window).width() + $(window).scrollLeft();
				else fold = $(settings.container).offset().left + $(settings.container).width();
				return fold <= $(element).offset().left - settings.threshold;
			},
			abovethetop: function (element, settings) {
				var fold;
				if (settings.container === undefined || settings.container === window) fold = $(window).scrollTop();
				else fold = $(settings.container).offset().top;
				return fold >= $(element).offset().top + settings.threshold + $(element).height();
			},
			leftofbegin: function (element, settings) {
				var fold;
				if (settings.container === undefined || settings.container === window) fold = $(window).scrollLeft();
				else fold = $(settings.container).offset().left;
				return fold >= $(element).offset().left + settings.threshold + $(element).width();
			},
			$in: function (e, threshold, c) {
				return !this.rightoffold(e, { threshold: threshold === undefined ? 0 : threshold, container: c }) && !this.leftofbegin(e, { threshold: threshold === undefined ? 0 : threshold, container: c }) &&
					   !this.belowthefold(e, { threshold: threshold === undefined ? 0 : threshold, container: c }) && !this.abovethetop(e, { threshold: threshold === undefined ? 0 : threshold, container: c });
			}
		},
		take: function (e) {
			_g.me = false;
			if (typeof e == 'undefined') e = $(document);
			e.find('form,input').attr('autocomplete', 'off');
			e.find('select').each(function () {
				var s = $(this);
				s.find('option').css('color', function () { return this.style.color == '' ? s.css('color') : this.style.color; });
			}).change(function () {
				var s = $(this).blur();
				s.css('color', function () {
					var o = s.find('option:selected');
					return o.length > 0 ? o[0].style.color : '';
				});
			}).change();
			e.find('form[book]').submit(function () { _g.book(this); return false; });

			e.find('.g_listclip').each(function () { _g.listclip($(this)); });

			_g.me = true;
			return e;
		},
		scroll: function (v, f) {
			$('html,body').animate({ scrollTop: v }, 300, function () { if (typeof f == 'function') { f(); } });
		},
		delay: function (d, f) { window.setTimeout(f, d); },
		finishcalls: [],
		finish: function (f) { if (typeof f == 'function') _g.finishcalls.push(f); else $.each(_g.finishcalls, function (i, n) { n(); }); },
		shelter: {
			create: function (c) {
				$('body>.g_shelter').remove();
				var e = $('<table class="g_shelter"><tr><td></td></tr></table>');
				e.find('td').append(c);
				return e.appendTo(document.body);
			},
			remove: function (e) {
				if (!e) e = $('body>.g_shelter:not(:has(>[keep]))');
				e.removeClass('show'); _g.delay(300, function () { e.remove(); });
			},
			qr: function (url, txt) {
				(window.event || arguments.callee.caller.arguments[0]).stopPropagation();
				_g.shelter.create($('<p><img src="' + url + '" /></p><p style="margin:10px 0;color:#fff;">' + txt + '</p>')).addClass('show');
				return false;
			},
			box: function (e) {
				(window.event || arguments.callee.caller.arguments[0]).stopPropagation();
				_g.shelter.create(e).addClass('show');
				return false;
			}
		},
		pageload: function (gpage, url, data, success, idxstart) {
			gpage.attr('s', 'loading').find('p.tip').text('Loading...');
			var idx = typeof idxstart == 'function' ? idxstart(gpage) : parseInt(gpage.attr('p') ? gpage.attr('p') : 1) + 1;
			if (typeof gpage.attr('n') != 'undefined' && gpage.attr('n') != '') data = $.isArray(data) ? $.merge(data, [{ "name": gpage.attr('n'), "value": idx }]) : $.extend(data, $.parseJSON('{"' + gpage.attr('n') + '":' + idx + '}'));
			$.ajax({
				url: url,
				data: data,
				success: function (r) {
					if ($.trim(r) == '') gpage.attr('s', 'none').find('p.tip').text(_g.lang.show('没有了', 'No more'));
					else {
						var r = $(r);
						gpage.find('p.tip').text('');
						if (typeof success == 'function') success(gpage, r);
						if ((r.find('script').length + r.filter('script').length) <= 0) _g.take(r);
						$(window).scroll();
					}
				},
				error: function (xhr, ts, tr) {
					gpage.attr('s', 'err').find('p.tip').text((ts == 'timeout' ? _g.lang.show('超时了', 'Time out') : _g.lang.show('出错了', 'There was a mistake')) + _g.lang.show('，点击重试！', ', click to retry!')).one('click', function () { gpage.trigger('next'); });
				}
			});
		},
		click: function (d) {
			$(function () { $.json('/g/do?click', d, null, true); });
		},
		book: function (f) {
			$(f).find('input[type=text],textarea').each(function () { $(this).val($.trim($(this).val())); });
			if (f.name.value == '') { f.name.focus(); return; }
			if (f.phone.value == '') { f.phone.focus(); return; }
			if (f.body.value == '') { f.body.focus(); return; }
			$.json('/g/do?book', $(f).serializeArray(), function (r) {
				if (r.s == 0) alert(_g.lang.show('留言已成功提交。', 'Message submitted successfully.'));
				else if (r.s == -1) alert(_g.lang.show('您留言太勤快，请歇会吧！', 'Your message is too frequent, please take a rest!'));
				if ($(f).parent().is('.g_book')) _g.shelter.remove();
				else { f.reset(); $(f).prop('disabled', true); }
			});
		},
		theme: function (t) {
			$('html').removeClass('theme-um-left theme-um-right theme-fore-other theme-fore-white theme-fore-gray theme-fore-red theme-fore-orange theme-fore-yellow theme-fore-green theme-fore-cyan theme-fore-blue theme-fore-purple theme-fore-black theme-back-other theme-back-white theme-back-gray theme-back-red theme-back-orange theme-back-yellow theme-back-green theme-back-cyan theme-back-blue theme-back-purple theme-back-black theme-back-dark');
			$('style#theme').remove();
			if (typeof t != 'object') return;
			if (typeof t.uma == 'string') $('html').addClass('theme-um-' + t.uma);
			if (typeof t.cfn == 'string' && t.cfn != '') $('html').addClass('theme-fore-' + t.cfn);
			if (typeof t.cbn == 'string' && t.cbn != '') $('html').addClass('theme-back-' + t.cbn);
			if ((typeof t.cfh == 'string' && t.cfh != '') || (typeof t.cbh == 'string' && t.cbh != ''))
				$.post('/g/do?theme', { cfh: t.cfh, cbh: t.cbh }, function (r) {
					$('<style id="theme"></style>').html(r).appendTo($('html head'));
					if (r.indexOf('/*back-dark*/') > -1) $('html').addClass('theme-back-dark');
				});
		},
		listclip: function (list) {
			var items = list.find('>*').show();
			if (!items.length) return;
			var c = [];
			for (var i = 0; i < items.length; i++) {
				var ex = false;
				for (var j = 0; j < c.length; j++) {
					if (c[j] == $(items[i]).position().left) {
						ex = true;
						break;
					}
				}
				if (!ex) c.push($(items[i]).position().left);
			}
			var cr = (items.length % c.length);
			if (cr > 0 && cr <= c.length / 2) items.filter(':gt(' + (items.length - cr - 1) + ')').hide();
		}
	}
	window._g = _g;
})(window);