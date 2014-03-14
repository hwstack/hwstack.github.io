User-Friendly Date
==================
When adding tasks, you actually don't have to input the date in the format, `M/D/YY`.

Try:

    today           tomorrow    next weekday
    on the morrow   July 2008   +5years 
    next friday     last April  2004.08.07
    6/4/2005        8:15 PM     22:30:45

Here’s a complete list of the patterns:

    jan: /^jan(uary)?/i,
    feb: /^feb(ruary)?/i,
    mar: /^mar(ch)?/i,
    apr: /^apr(il)?/i,
    may: /^may/i,
    jun: /^jun(e)?/i,
    jul: /^jul(y)?/i,
    aug: /^aug(ust)?/i,
    sep: /^sep(t(ember)?)?/i,
    oct: /^oct(ober)?/i,
    nov: /^nov(ember)?/i,
    dec: /^dec(ember)?/i,
    sun: /^su(n(day)?)?/i,
    mon: /^mo(n(day)?)?/i,
    tue: /^tu(e(s(day)?)?)?/i,
    wed: /^we(d(nesday)?)?/i,
    thu: /^th(u(r(s(day)?)?)?)?/i,
    fri: /^fr(i(day)?)?/i,
    sat: /^sa(t(urday)?)?/i,
    future: /^next/i,
    past: /^last|past|prev(ious)?/i,
    add: /^(\+|after|from)/i,
    subtract: /^(\-|before|ago)/i,
    yesterday: /^yesterday/i,
    today: /^t(oday)?/i,
    tomorrow: /^tomorrow/i,
    now: /^n(ow)?/i,
    week: /^w(ee)?k/i,
    month: /^m(o(nth)?s?)?/i,
    day: /^d(ays?)?/i,
    year: /^y((ea)?rs?)?/i,
