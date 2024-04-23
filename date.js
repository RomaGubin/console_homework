#!/usr/bin/env node

const yargs = require('yargs');
//date-fns - это библиотека для работы с датами
const { addDays, subMonths, format } = require('date-fns');

const argv = yargs
  .command('current', 'Get current date and time', {
    year: {
        //alias: Этот параметр позволяет задать альтернативные имена для аргумента
        alias: 'y',
        //description: Этот параметр используется для предоставления описания аргумента командной строки
        description: 'Get current year',
        type: 'boolean'
    },
    month: {
        alias: 'm',
        description: 'Get current month',
        type: 'boolean'
    },
    date: {
        alias: 'd',
        description: 'Get current date in calendar month',
        type: 'boolean'
    }
  })
  .command('add', 'Add days or months to current date', {
    days: {
        alias: 'd',
        description: 'Add days to current date',
        type: 'number'
    },
    months: {
        alias: 'm',
        description: 'Add months to current date',
        type: 'number'
    }
  })
  .command('sub', 'Subtract days or months from current date', {
    days: {
        alias: 'd',
        description: 'Subtract days from current date',
        type: 'number'
    },
    months: {
        alias: 'm',
        description: 'Subtract months from current date',
        type: 'number'
    }
  })
  .demandCommand(1, 'You need to specify a command')
  .help()
  .argv;

const now = new Date();

function formatDate(date) {
  return format(date, "yyyy-MM-dd'T'HH:mm:ssxxx");
}

if (argv._[0] === 'current') {
  if (argv.year) {
    console.log(now.getFullYear())
  } else if (argv.month) {
    console.log(now.getMonth() + 1)
  } else if (argv.date) {
    console.log(formatDate(now));
  } else {
      console.log(formatDate(now));
  }
} else if (argv._[0] === 'add') {
  if (argv.days) {
      const newDate = addDays(now, argv.days);
      console.log(formatDate(newDate));
  } else if (argv.months) {
      const newDate = addMonths(now, argv.months);
      console.log(formatDate(newDate));
  }
} else if (argv._[0] === 'sub') {
  if (argv.days) {
      const newDate = subDays(now, argv.days);
      console.log(formatDate(newDate));
  } else if (argv.months) {
      const newDate = subMonths(now, argv.months);
      console.log(formatDate(newDate));
  }
}