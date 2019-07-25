import {expectType} from 'tsd';
import merryChristmas = require('.');

expectType<readonly string[]>(merryChristmas.all);
expectType<string>(merryChristmas.random());