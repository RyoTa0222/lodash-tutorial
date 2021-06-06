export const data = [
  {
    title: 'Array',
    items: [
      {
        label: 'chunk',
        description:
          '引数のsizeで指定したサイズに要素を分割した配列を作成します。配列を均等に分割できない場合、最後のチャンクは残りの要素になります。chunkの意味は「〔～を〕大きな塊に切り分ける」',
        table: [
          { name: 'array', type: 'Array', description: '対象の配列' },
          {
            name: 'size',
            type: 'number',
            description: '分割する要素の数。defaultは１'
          }
        ],
        code: `// example
_.chunk(['a', 'b', 'c', 'd', 'e']);
// => [['a'], ['b'], ['c'], ['d'], ['e']]
_.chunk(['a', 'b', 'c', 'd', 'e'], 2);
// => [['a', 'b'], ['c', 'd'], ['e']]
_.chunk(['a', 'b', 'c', 'd', 'e'], 3);
// => [['a', 'b', 'c'], ['d', 'e']]`
      },
      {
        label: 'compact',
        description:
          'falseyな値を取り除いた配列を生成する。falseyとは、flase, null, 0, "", undefined, NaN',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '元の配列'
          }
        ],
        code: `_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]`
      },
      {
        label: 'difference',
        description:
          '等価比較のために SameValueZero を使用して、他の指定された配列に含まれていない配列値の配列を作成します。結果値の順序と参照は、最初の配列によって決定されます。',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '比較対象の配列'
          },
          {
            name: '[values]',
            type: '...Array',
            description: '除外する値'
          }
        ],
        code: `_.difference([2, 1, 6, 4], [1, 2, 3]);
// => [6, 4]`
      },
      {
        label: 'differenceBy',
        description:
          '配列と値の各要素に対して呼び出される iteratee を受け入れて、それらを比較する基準を生成する点が異なります。結果値の順序と参照は、最初の配列によって決定されます。',

        table: [
          {
            name: 'array',
            type: 'Array',
            description: '比較対象の配列'
          },
          {
            name: '[values]',
            type: '...Array',
            description: '除外する値'
          },
          {
            name: '[iteratee=_.identity]',
            type: 'Function',
            description: '要素ごとに呼び出される iteratee'
          }
        ],
        code: `_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]`
      },
      {
        label: 'drop',
        description:
          '最初からn番目までの要素を削除した配列を生成します。n >= 1',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '比較対象の配列'
          },
          {
            name: '[n=1]',
            type: 'number',
            description: '削除する要素の数'
          }
        ],
        code: `_.drop([1, 2, 3, 4, 5], 3);
// => [4, 5]
_.drop([1, 2, 3, 4, 5], 6);
// => []`
      },
      {
        label: 'dropRight',
        description:
          '最後からn番目までの要素を削除した配列を生成します。n >= 1',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '比較対象の配列'
          },
          {
            name: '[n=1]',
            type: 'number',
            description: '削除する要素の数'
          }
        ],
        code: `_.dropRight([1, 2, 3, 4, 5], 3);
// => [1, 2]
_.dropRight([1, 2, 3, 4, 5], 6);
// => []`
      },
      {
        label: 'fill',
        description: '配列の要素を開始から終了まで、指定した値で埋めます。',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '対象の配列'
          },
          {
            name: 'value',
            type: 'unknown',
            description: '配列の値を埋めるための値'
          },
          {
            name: '[start=0]',
            type: 'number',
            description: '開始位置'
          },
          {
            name: '[end=array.length]',
            type: 'number',
            description: '終了位置'
          }
        ],
        code: `var array = [1, 2, 3];
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
_.fill(Array(3), 2);
// => [2, 2, 2]
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]`
      },
      {
        label: 'flatten',
        description: '配列を第一階層の深さまで平坦化します。',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '対象の配列'
          }
        ],
        code: `_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]`
      },
      {
        label: 'flattenDeep',
        description: '配列を再帰的に平坦化します。',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '対象の配列'
          }
        ],
        code: `_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]`
      },
      {
        label: 'fromPairs',
        description:
          '対象の配列から、キーと値のペアで構成されるオブジェクトを生成します。',
        table: [
          {
            name: 'pairs',
            type: 'Array',
            description: '対象の配列'
          }
        ],
        code: `_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }`
      },
      {
        label: 'intersection',
        description:
          '指定されたすべての配列に含まれる一意の値の配列を作成します。結果値の順序と参照は、最初の配列によって決定されます。intersectionの意味は「交差点」',
        table: [
          {
            name: '[arrays]',
            type: '...Array',
            description: '対象の配列'
          }
        ],
        code: `_.intersection([2, 1], [2, 3]);
// => [2]
_.intersection([1, 2], [])
// => []
_.intersection([1, 2])
// => [1, 2]`
      },
      {
        label: 'pull',
        description:
          '等価比較のために SameValueZero を使用して、指定されたすべての値を配列から削除します。_.without とは異なり、このメソッドは配列を変更します。 _.remove を使用して、述語によって配列から要素を削除します。',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '対象の配列'
          },
          {
            name: '[values]',
            type: '...any',
            description: '削除する値'
          }
        ],
        code: `var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']`
      },
      {
        label: 'unionBy',
        description:
          '２つの配列の値を比較し、出現する最初の値から配列が生成されます。',
        table: [
          {
            name: '[arrays]',
            type: '...Array',
            description: '対象の配列'
          },
          {
            name: '[iteratee=_.identity]',
            type: 'Function',
            description: '要素ごとに呼び出される iteratee'
          }
        ],
        code: `_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]`
      },
      {
        label: 'without',
        description:
          '指定されたすべての値を除外した配列を作成します。pullと違って結果に新しい配列を返します。',
        table: [
          {
            name: 'array',
            type: 'Array',
            description: '対象の配列'
          },
          {
            name: '[values]',
            type: '...any',
            description: '削除する値'
          }
        ],
        code: `_.without([2, 1, 2, 3], 1, 2);
// => [3]`
      },
      {
        label: 'xor',
        description:
          '指定された配列の対称差である一意の値の配列を作成します。結果値の順序は、配列内での発生順序によって決まります。',
        table: [
          {
            name: '[arrays]',
            type: '...Array',
            description: '対象の配列'
          }
        ],
        code: `_.xor([2, 1], [2, 3]);
// => [1, 3]
_.xor([2, 1], [2, 3], [2, 3, 5]);
// => [1, 5]`
      }
    ]
  },
  {
    title: 'Collection',
    items: [
      {
        label: 'countBy',
        description:
          'コレクションの各要素を反復して実行した結果から生成されたキーで構成されるオブジェクトを作成します。各キーに対応する値は、キーが iteratee によって返された回数です。',
        table: [
          {
            name: 'collection',
            type: 'Array|Object',
            description: '反復するコレクション'
          },
          {
            name: '[iteratee=_.identity]',
            type: 'Function',
            description: 'キーを変換する iteratee'
          }
        ],
        code: `_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }`
      },
      {
        label: 'flatMap',
        description:
          'コレクション内の各要素を反復処理し、マップされた結果をフラット化することにより、フラット化された値の配列を作成します。',
        table: [
          {
            name: 'collection',
            type: 'Array|Object',
            description: '反復するコレクション'
          },
          {
            name: '[iteratee=_.identity]',
            type: 'Function',
            description: 'キーを変換する iteratee'
          }
        ],
        code: `function duplicate(n) {
  return [n, n];
}
_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]`
      },
      {
        label: 'groupBy',
        description:
          'コレクションの各要素を反復して実行した結果から生成されたキーで構成されるオブジェクトを作成します。グループ化された値の順序は、コレクション内で発生する順序によって決まります。各キーに対応する値は、キーの生成を担当する要素の配列です。',
        table: [
          {
            name: 'collection',
            type: 'Array|Object',
            description: '反復するコレクション'
          },
          {
            name: '[iteratee=_.identity]',
            type: 'Function',
            description: 'キーを変換する iteratee'
          }
        ],
        code: `_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }`
      },
      {
        label: 'orderBy',
        description:
          'このメソッドは _.sortBy に似ていますが、ソートする反復のソート順を指定できる点が異なります。順序が指定されていない場合、すべての値は昇順で並べ替えられます。それ以外の場合は、対応する値の降順の場合は「desc」、昇順の場合は「asc」の順序を指定します。',
        table: [
          {
            name: 'collection',
            type: 'Array|Object',
            description: '反復するコレクション'
          },
          {
            name: '[iteratee=_.identity]',
            type: 'Function',
            description: 'キーを変換する iteratee'
          },
          {
            name: '[orders]',
            type: 'string[]',
            description: 'iteratee のソート順。'
          }
        ],
        code: `var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// Sort by user in ascending order and by age in descending order.
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]`
      },
      {
        label: 'shuffle',
        description: 'シャッフルされた値の配列を生成します。',
        table: [
          {
            name: 'collection',
            type: 'Array|Object',
            description: '反復するコレクション'
          }
        ],
        code: `_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]`
      },
      {
        label: 'size',
        description:
          '配列のような値の場合はその長さ、またはオブジェクトの独自の列挙可能な文字列キー付きプロパティの数を返すことにより、コレクションのサイズを取得します。',
        table: [
          {
            name: 'collection',
            type: 'Array|Object',
            description: '反復するコレクション'
          }
        ],
        code: `_.size([1, 2, 3]);
// => 3
_.size({ 'a': 1, 'b': 2 });
// => 2
_.size('pebbles');
// => 7`
      }
    ]
  },
  {
    title: 'Function',
    items: [
      {
        label: 'debounce',
        description:
          'デバウンスされた関数が最後に呼び出されてから wait ミリ秒が経過するまで func の呼び出しを遅らせるデバウンスされた関数を作成します。 デバウンスされた関数には、遅延した func 呼び出しをキャンセルする cancel メソッドと、それらをすぐに呼び出す flash メソッドが付属しています。leadingとtrailが true の場合、待機タイムアウト中にデバウンスされた関数が複数回呼び出された場合にのみ、func はタイムアウトの終わりに呼び出されます。',
        table: [
          {
            name: 'func',
            label: 'Function',
            description: '機能'
          },
          {
            name: '[wait=0]',
            label: 'number',
            description: '実行を遅延させるミリ秒'
          },
          {
            name: '[options={}]',
            label: 'Object',
            description: 'オプション'
          },
          {
            name: '[options.leading=false]',
            label: 'boolean',
            description: ''
          },
          {
            name: '[options.maxWait]',
            label: 'number',
            description: '関数が呼び出される前に遅延できる最大時間'
          },
          {
            name: '[options.trailing=true]',
            label: 'boolean',
            description: 'タイムアウトの立ち下がりでの呼び出しを指定します。'
          }
        ],
        code: `// Invoke sendMail when clicked, debouncing subsequent calls.
jQuery(element).on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));
// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);`
      },
      {
        label: 'delay',
        description: '指定した時間の経過後関数を呼び出します',
        table: [
          {
            name: 'func',
            type: 'Function',
            description: '機能'
          },
          {
            name: 'wait',
            type: 'number',
            description: '待機する時間'
          },
          {
            name: '[args]',
            type: '...any',
            description: '関数を呼び出すための引数'
          }
        ],
        code: `_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
// => Logs 'later' after one second.`
      },
      {
        label: 'negate',
        description: '関数を実行した結果を否定する関数を作成します。 ',
        table: [
          {
            name: 'predicate',
            description: '否定する関数',
            type: 'Function'
          }
        ],
        code: `function isEven(n) {
  return n % 2 == 0;
}
_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]`
      },
      {
        label: 'partial',
        description:
          'func が受け取る引数を一部渡した状態で func を呼び出す関数を作成します。',
        table: [
          {
            name: 'func',
            type: 'Function',
            description: '呼び出す関数'
          },
          {
            name: '[partials]',
            type: '...any',
            description: '事前に与える引数'
          }
        ],
        code: `function greet(greeting, name) {
  return greeting + ' ' + name;
}
var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'`
      },
      {
        label: 'throttle',
        description:
          '待機ミリ秒ごとに最大 1 回だけ func を呼び出すスロットル関数を作成します。スロットルされた関数には、遅延した func 呼び出しをキャンセルする cancel メソッドと、それらをすぐに呼び出すための flush メソッドが付属しています。',
        table: [
          {
            name: 'func',
            label: 'Function',
            description: '機能'
          },
          {
            name: '[wait=0]',
            label: 'number',
            description: '実行を遅延させるミリ秒'
          },
          {
            name: '[options={}]',
            label: 'Object',
            description: 'オプション'
          },
          {
            name: '[options.leading=true]',
            label: 'boolean',
            description: ''
          },
          {
            name: '[options.trailing=true]',
            label: 'boolean',
            description: 'タイムアウトの立ち下がりでの呼び出しを指定します。'
          }
        ],
        code: `// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// Invoke renewToken when the click event is fired, but not more than once every 5 minutes.
var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);

// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel);
`
      }
    ]
  },
  {
    title: 'Lang',
    items: [
      {
        label: 'clone',
        description: '値をシャロークローンします。',
        table: [
          {
            name: 'value',
            type: 'any',
            description: 'クローンする値'
          }
        ],
        code: `var objects = [{ 'a': 1 }, { 'b': 2 }];
var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);
// => true`
      },
      {
        label: 'cloneDeep',
        description: '値を再帰的にクローンします',
        table: [
          {
            name: 'value',
            type: 'any',
            description: 'クローンする値'
          }
        ],
        code: `var objects = [{ 'a': 1 }, { 'b': 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false`
      },
      {
        label: 'conformsTo',
        description:
          'object の対応するプロパティ値で source のプロパティを呼び出すことにより、オブジェクトが source に適合しているかどうかをチェックします。',
        table: [
          {
            name: 'object',
            type: 'Object',
            description: 'オブジェクト'
          },
          {
            name: 'source',
            type: 'Object',
            description: '準拠するプロパティのオブジェクト'
          }
        ],
        code: `var object = { 'a': 1, 'b': 2 };
_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false`
      },
      {
        label: 'isEqual',
        description:
          '2 つの値のディープな比較を実行して、それらが等しいかどうかを判断します',
        table: [
          {
            name: 'value',
            type: 'any',
            description: '対象の値'
          },
          {
            name: 'other',
            type: 'any',
            description: '比較する値'
          }
        ],
        code: `var object = { 'a': 1 };
var other = { 'a': 1 };
_.isEqual(object, other);
// => true
object === other;
// => false`
      },
      {
        label: 'isError',
        description:
          '値が Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、または URIError オブジェクトであるかどうかを確認します。',
        table: [
          {
            name: 'value',
            type: 'any',
            description: 'チェックする値'
          }
        ],
        code: `_.isError(new Error);
// => true
_.isError(Error);
// => false`
      },
      {
        label: 'isMatch',
        description:
          'オブジェクトとソースの間で部分的な詳細比較を実行して、オブジェクトに同等のプロパティ値が含まれているかどうかを判断します。',
        table: [
          {
            name: 'object',
            type: 'Object',
            description: 'オブジェクト'
          },
          {
            name: 'source',
            type: 'Object',
            description: '準拠するプロパティのオブジェクト'
          }
        ],
        code: `var object = { 'a': 1, 'b': 2 };
_.isMatch(object, { 'b': 2 });
// => true
_.isMatch(object, { 'b': 1 });
// => false`
      },
      {
        label: 'isNil',
        description: '値がnullかundefinedかチェックします',
        table: [
          {
            name: 'value',
            type: 'any',
            description: 'チェックする値'
          }
        ],
        code: `_.isNil(null);
// => true
_.isNil(void 0);
// => true
_.isNil(NaN);
// => false`
      },
      {
        label: 'toArray',
        description: '値を配列に変換します',
        table: [
          {
            name: 'value',
            type: 'any',
            description: 'チェックする値'
          }
        ],
        code: `_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]
_.toArray('abc');
// => ['a', 'b', 'c']
_.toArray(1);
// => []
_.toArray(null);
// => []`
      }
    ]
  },
  {
    title: 'Math',
    items: [
      {
        label: 'ceil',
        description: '精度に切り上げられた数値を計算します',
        table: [
          {
            name: 'number',
            type: 'number',
            description: '切り上げる数字'
          },
          {
            name: '[precision=0]',
            type: 'number',
            description: '切り上げる精度'
          }
        ],
        code: `_.ceil(4.006);
// => 5
_.ceil(6.004, 2);
// => 6.01
_.ceil(6040, -2);
// => 6100`
      }
    ]
  },
  {
    title: 'Object',
    items: [
      {
        label: 'pick',
        description:
          '選択したオブジェクト プロパティで構成されるオブジェクトを作成します。',
        table: [
          {
            name: 'object',
            type: 'Object',
            description: 'ソース'
          },
          {
            name: '[paths]',
            type: '...(string|string[])',
            description: '選択するキー'
          }
        ],
        code: `var object = { 'a': 1, 'b': '2', 'c': 3 };
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }`
      }
    ]
  },
  {
    title: 'String',
    items: [
      {
        label: 'capitalize',
        description:
          '文字列の最初の文字を大文字に変換し、残りを小文字に変換します。',
        table: [
          {
            name: "[string='']",
            type: 'string',
            description: '文字列'
          }
        ],
        code: `_.capitalize('FRED');
// => 'Fred'`
      },
      {
        label: 'escape',
        description:
          '文字列内の文字 "&"、"<"、">"、\'"\'、および "\'" を対応する HTML エンティティに変換します。',
        table: [
          {
            name: "[string='']",
            type: 'string',
            description: '文字列'
          }
        ],
        code: `_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'`
      },
      {
        label: 'padStart',
        description:
          '文字列より短い場合は左側に文字列を埋め込みます。パディング文字は、長さを超えると切り捨てられます。',
        table: [
          {
            name: "[string='']",
            type: 'string',
            description: '対象の文字列'
          },
          {
            name: '[length=0]',
            type: 'number',
            description: '埋める文字列の長さ'
          },
          {
            name: "[chars=' ']",
            type: 'string',
            description: '埋めるのに使用する文字列'
          }
        ],
        code: `_.padStart('abc', 6);
// => '   abc'
_.padStart('abc', 6, '_-');
// => '_-_abc'
_.padStart('abc', 3);
// => 'abc'`
      },
      {
        label: 'repeat',
        description: '引数の文字列をn回繰り返す',
        table: [
          {
            name: "[string='']",
            type: 'string',
            description: '対象の文字列'
          },
          {
            name: '[n=1]',
            description: '繰り返す回数',
            type: 'number'
          }
        ],
        code: `_.repeat('*', 3);
// => '***'
_.repeat('abc', 2);
// => 'abcabc'
_.repeat('abc', 0);
// => ''`
      },
      {
        label: 'unescape',
        description:
          '文字列内の HTML エンティティ &、<、>、"、および \' を対応する文字に変換します。',
        table: [
          {
            name: "[string='']",
            type: 'string',
            description: '文字列'
          }
        ],
        code: `_.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'`
      }
    ]
  },
  {
    title: 'Util',
    items: [
      {
        label: 'range',
        description:
          '開始から終了までの数値 (正および/または負) の配列を作成します',
        table: [
          {
            name: '[start=0]',
            type: 'number',
            description: '開始する数字'
          },
          {
            name: 'end',
            type: 'number',
            description: '終了する数字'
          },
          {
            name: '[step=1]',
            type: 'number',
            description: '増加 / 減少する数字'
          }
        ],
        code: `_.range(4);
// => [0, 1, 2, 3]
_.range(-4);
// => [0, -1, -2, -3]
 
_.range(1, 5);
// => [1, 2, 3, 4]
 
_.range(0, 20, 5);
// => [0, 5, 10, 15]
 
_.range(0, -4, -1);
// => [0, -1, -2, -3]
 
_.range(1, 4, 0);
// => [1, 1, 1]
 
_.range(0);
// => []`
      },
      {
        label: 'uniqueId',
        description: 'ユニークIDを生成します',
        table: [
          {
            name: "[prefix='']",
            type: 'string',
            description: 'IDの接頭文字列'
          }
        ],
        code: `_.uniqueId('contact_');
// => 'contact_104'
 
_.uniqueId();
// => '105'`
      }
    ]
  }
];
