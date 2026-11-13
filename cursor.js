(function () {
	if (!window.matchMedia('(pointer: fine)').matches) return;
	var cursor = document.querySelector('.cursor');
	var follower = document.querySelector('.cursor-follower');
	if (!cursor || !follower) return;
	document.addEventListener('pointermove', function (event) {
		if (event.pointerType !== 'mouse') return;
		var x = event.clientX + 'px';
		var y = event.clientY + 'px';
		cursor.style.setProperty('--cursor-x', x);
		cursor.style.setProperty('--cursor-y', y);
		follower.style.setProperty('--follower-x', x);
		follower.style.setProperty('--follower-y', y);
	}, { passive: true });

	function hideCursor() {
		cursor.style.removeProperty('--cursor-x');
		cursor.style.removeProperty('--cursor-y');
		follower.style.removeProperty('--follower-x');
		follower.style.removeProperty('--follower-y');
	}

	document.querySelectorAll('.portfolio-item img').forEach(function (image) {
		image.addEventListener('pointerenter', function (event) {
			if (event.pointerType !== 'mouse') return;
			cursor.classList.add('active');
			follower.classList.add('active');
		});
		image.addEventListener('pointerleave', function () {
			cursor.classList.remove('active');
			follower.classList.remove('active');
		});
	});

	document.documentElement.addEventListener('pointerleave', hideCursor);
	window.addEventListener('blur', hideCursor);
})();
