import { Selector } from 'testcafe';
import ReactSelector from 'testcafe-react-selectors';

fixture('Sample').page('http://localhost:3000');

test('Can find welcome text', async t => {
  const el = ReactSelector('Home');
  await t.expect(el.innerText).eql('Welcome to next.js!');
});

