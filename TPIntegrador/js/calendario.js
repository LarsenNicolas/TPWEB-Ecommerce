document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins:  ['dayGrid'],
      locale: 'es',
      events:[
          {
              title: 'HTML',
              start: '2021-06-20'
          },
          {
              title: 'HTML-CSS',
              start: '2021-06-25',
              end: '2021-06-26'
          },
          {
              title: 'PYTHON',
              start: '2021-06-28'
          },
          {
              title: 'PYTHON',
              start:'2021-07-12'
          },
          {
            title: 'Excel',
            start:'2021-07-16'
          },
          {
            title: 'JAVA',
            start:'2021-07-20'
          }

      ]
  
    });
    calendar.render();
  });