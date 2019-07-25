import test from 'ava';
import mn from '.';

test('Check greetings', t => {
	t.true(mn.all.length > 0);
	t.truthy(mn.random());
	t.not(mn.random(), mn.random());
	t.is(mn.all[0], 'Let’s celebrate this blissful New Year. happy Christmas.');
});
