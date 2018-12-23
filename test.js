import test from 'ava';
import mn from '.';

test('Test',t => {
	t.true(mn.all.length > 0);
	t.truthy(mn.rand());
	t.not(mn.rand(), mn.rand());
	t.is(mn.all[0], 'Let’s celebrate this blissful New Year. happy Christmas.');
});
