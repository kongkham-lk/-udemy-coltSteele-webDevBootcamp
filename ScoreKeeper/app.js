const sc1 = document.querySelector('#p1');
const sc2 = document.querySelector('#p2');
const setNum = document.querySelector('input#number');
const btn = document.querySelector('#button');
const w1 = document.querySelector('#p1Win');
const w2 = document.querySelector('#p2Win');
const re = document.querySelector('#reset');

btn.addEventListener('click', function(e) {
	btnClick(e);
	
	const numSet = parseInt(setNum.value);
	if (parseInt(sc1.textContent) === numSet || parseInt(sc2.textContent) === numSet) {
		w1.disabled = true;
		w1.style.filter = 'grayscale(80%) brightness(130%)';
		w2.disabled = true;
		w2.style.filter = 'grayscale(80%) brightness(130%)';
	
		if (parseInt(sc1.textContent) > parseInt(sc2.textContent)) {
			sc1.style.color = '#00b9b5';
			sc2.style.color = 'red';
		} else {
			sc2.style.color = '#00b9b5';
			sc1.style.color = 'red';
		}
	}
})

function btnClick(e) {
	if (e.target == w1) {
		let n = parseInt(sc1.textContent) + 1;
		sc1.innerText = n
	}
	else if (e.target == w2) {
		let n = parseInt(sc2.textContent) + 1;
		sc2.innerText = n
	}
	else if (e.target == re) {
		sc1.innerText = 0
		sc2.innerText = 0
	}	
}