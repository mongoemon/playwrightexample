// security-cases.ts - Data for data-driven security tests
export const SECURITY_CASES = [
  {
    name: 'SQL injection in username',
    username: "' OR 1=1; --",
    password: 'secret_sauce',
  },
  {
    name: 'XSS in username',
    username: '<script>alert(1)</script>',
    password: 'secret_sauce',
  },
  {
    name: 'Empty fields',
    username: '',
    password: '',
  },
  {
    name: 'Only username',
    username: 'standard_user',
    password: '',
  },
  {
    name: 'Only password',
    username: '',
    password: 'secret_sauce',
  },
  {
    name: 'Special characters in username',
    username: '!@#$%^&*()',
    password: 'secret_sauce',
  },
  {
    name: 'Long username and password',
    username: 'a'.repeat(256),
    password: 'a'.repeat(256),
  },
  {
    name: 'Unicode and emoji in username',
    username: '😀测试ユーザー',
    password: 'secret_sauce',
  },
  {
    name: 'HTML tags in password',
    username: 'standard_user',
    password: '<b>password</b>',
  },
  {
    name: 'SQL injection in password',
    username: 'standard_user',
    password: "' OR '1'='1",
  },
  {
    name: 'XSS in password',
    username: 'standard_user',
    password: '<script>alert(1)</script>',
  },
];
