import assert from 'power-assert';
import markdownIt from 'markdown-it';
import markdownItBlockdiag from '../dist/main';

const mdi = markdownIt();
mdi.use(markdownItBlockdiag);

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>', '# Hello world');
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>', 'Hello world');

const expectTemplate = (url, diagType, expectDeflate) => {
  return `<a href="${url}/api/v1/${diagType}/inflate/${expectDeflate}" target="_blank"><img src="${url}/api/v1/${diagType}/inflate/${expectDeflate}" alt="${url}/api/v1/${diagType}/inflate/${expectDeflate}" /></a>`;
};

it('blockdiag', () => {
  let render_text = mdi.render(`\`\`\`blockdiag
  {
    A -> B;
  }
  \`\`\``);
  const expect = expectTemplate('https://blockdiag-api.com', 'blockdiag', 'q-ZSAAJHBV07BSdrILsWAA==');
  assert(render_text === expect);
});

it('blockdiag whitespace parse', () => {
  let render_text = mdi.render(`\`\`\` blockdiag
  {
    A -> B;
  }
  \`\`\``);
  const expect = expectTemplate('https://blockdiag-api.com', 'blockdiag', 'q-ZSAAJHBV07BSdrILsWAA==');
  assert(render_text === expect);
});

it('seqdiag', () => {
  let render_text = mdi.render(`\`\`\`seqdiag
  {
    A -> B;
    A <-- B;
  }
  \`\`\``);
  const expect = expectTemplate('https://blockdiag-api.com', 'seqdiag', 'q-ZSAAJHBV07BSdrKNtGVxfCqQUA');
  assert(render_text === expect);
});

it('pre block', () => {
  let render_text = mdi.render(`\`\`\`shell
{
  testString
}
\`\`\``);
  const expect = `<pre><code class="language-shell">{
  testString
}
</code></pre>
`;

  assert(render_text === expect);
});

it('change url', () => {
  mdi.use(markdownItBlockdiag, { generateSourceUrl: 'http://localhost:8000' });
  let render_text = mdi.render(`\`\`\`blockdiag
  {
    A -> B;
  }
  \`\`\``);
  const expect = expectTemplate('http://localhost:8000', 'blockdiag', 'q-ZSAAJHBV07BSdrILsWAA==');
  assert(render_text === expect);
});

it('change Marker', () => {
  mdi.use(markdownItBlockdiag, { marker: ':::' });
  let render_text = mdi.render(`:::blockdiag
  {
    A -> B;
  }
  :::`);
  const expect = expectTemplate('https://blockdiag-api.com', 'blockdiag', 'q-ZSAAJHBV07BSdrILsWAA==');
  assert(render_text === expect);
});
