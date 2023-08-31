
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 16,
    rate: 8.8
  }
  expect(calculateMonthlyPayment(values)).toEqual("194.49");
  values.amount = 16000;
  values.years = 12;
  values.rate = 4;
  expect(calculateMonthlyPayment(values)).toEqual("140.08");
  values.amount = 5000;
  values.years = 2;
  values.rate = 60;
  expect(calculateMonthlyPayment(values)).toEqual("362.35")
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20067,
    years: 16,
    rate: 8.4
  }
  expect(calculateMonthlyPayment(values)).toEqual("190.34");
  values.amount = 16735;
  values.years = 12;
  values.rate = 4.6;
  expect(calculateMonthlyPayment(values)).toEqual("151.44");
  values.amount = 5060;
  values.years = 2;
  values.rate = 60.82;
  expect(calculateMonthlyPayment(values)).toEqual("369.14");
});

it('should handle ridiculously high interest rates', function () {
  const values = {
    amount: 20000,
    years: 16,
    rate: 880
  }
  expect(calculateMonthlyPayment(values)).toEqual("14666.67");
  values.amount = 5060;
  values.years = 30;
  values.rate = 1000;
  expect(calculateMonthlyPayment(values)).toEqual("4216.67");
});

it('should handle ridiculously low interest rates', function () {
  const values = {
    amount: 20000,
    years: 16,
    rate: 0.8
  }
  expect(calculateMonthlyPayment(values)).toEqual("111.01");
  values.amount = 5060;
  values.years = 30;
  values.rate = 0.01;
  expect(calculateMonthlyPayment(values)).toEqual("14.08");
});
