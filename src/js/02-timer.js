import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      initOnSuitableDate(selectedDates[0]);
    },
};

const refs = {
  dateSelectorEl: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

const dateInst = flatpickr(refs.dateSelectorEl, options);

console.log(dateInst.selectedDates[0]);

initOnSuitableDate(dateInst.selectedDates[0]);

function initOnSuitableDate(date) {
    if (Date.now() < date) {
        refs.startBtnEl.disabled = false;
        return;
    }
    refs.startBtnEl.disabled = true;
    console.log('wrong date');
}