var context = require.context('../src', true, /_test\.(js|jsx)$/);
context.keys().forEach(context);