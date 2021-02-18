(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    83: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'frontMatter', function () {
          return s;
        }),
        t.d(n, 'metadata', function () {
          return i;
        }),
        t.d(n, 'toc', function () {
          return l;
        }),
        t.d(n, 'default', function () {
          return d;
        });
      var r = t(3),
        a = t(7),
        o = (t(0), t(90)),
        s = { id: 'formula', title: 'Formula API', sidebar_label: 'Formula API' },
        i = {
          unversionedId: 'formula',
          id: 'formula',
          isDocsHomePage: !1,
          title: 'Formula API',
          description: 'svelte-formula',
          source: '@site/docs/formula.md',
          slug: '/formula',
          permalink: '/docs/formula',
          version: 'current',
          sidebar_label: 'Formula API',
          sidebar: 'someSidebar',
          next: { title: 'Formula Options', permalink: '/docs/options' },
        },
        l = [
          { value: 'What is Formula?', id: 'what-is-formula', children: [] },
          {
            value: 'Adding powerful custom validations and enrichment',
            id: 'adding-powerful-custom-validations-and-enrichment',
            children: [],
          },
          { value: 'Full Example', id: 'full-example', children: [] },
        ],
        c = { toc: l };
      function d(e) {
        var n = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object(r.a)({}, c, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)(
            'p',
            null,
            Object(o.b)(
              'a',
              { parentName: 'p', href: 'https://www.npmjs.com/package/svelte-formula' },
              Object(o.b)('img', {
                parentName: 'a',
                src: 'https://img.shields.io/npm/v/svelte-formula?label=svelte-formula',
                alt: 'svelte-formula',
              }),
            ),
          ),
          Object(o.b)('h2', { id: 'what-is-formula' }, 'What is Formula?'),
          Object(o.b)(
            'blockquote',
            null,
            Object(o.b)(
              'p',
              { parentName: 'blockquote' },
              Object(o.b)(
                'strong',
                { parentName: 'p' },
                'Formula is still in active development - as such there may still be API changes',
              ),
            ),
          ),
          Object(o.b)(
            'p',
            null,
            'Formula is a library for ',
            Object(o.b)('a', { parentName: 'p', href: 'https://svelte.dev' }, 'Svelte'),
            ' with features for creating ',
            Object(o.b)('strong', { parentName: 'p' }, 'Zero Configuration'),
            ' reactive forms\nand fully data-driven applications.',
          ),
          Object(o.b)(
            'p',
            null,
            "Out-of-the box it's designed to work with HTML5 forms. Configuring your forms validation is as easy as setting\nattributes, and doesn't get in the way of things like Accessibility.",
          ),
          Object(o.b)(
            'p',
            null,
            'For example making a field requied - add the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<input required>'),
            ' property or ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<input minlength="8">'),
            ' to set a minimum\nlength.',
          ),
          Object(o.b)(
            'p',
            null,
            'All the form values, states and enrichment are available through the instance ',
            Object(o.b)('a', { parentName: 'p', href: '/docs/stores/stores' }, 'stores'),
            ' (which are just\nSvelte stores!)',
          ),
          Object(o.b)(
            'p',
            null,
            'All you need is a element container with the Svelte ',
            Object(o.b)('a', { parentName: 'p', href: 'https://svelte.dev/docs#use_action' }, 'use'),
            ' directive and form input\nfields with their ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'name'),
            ' property set.',
          ),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              { parentName: 'pre', className: 'language-svelte' },
              '  <script>\n    import { formula } from \'svelte-formula\'\n    const { form, formIsValid, validity, touched } = formula();\n\n    // Here we can provide a default value\n    export let projectname = \'\';\n\n    // You can calculate values for valid UI states\n    $: projectNameInvalid = $touched?.projectName && validity?.projectName?.invalid\n  </script>\n\n  <div use:form>\n    <label for="project-name">Project Name</label>\n    <input type="text" name="projectName" required minlength="8" class:error={projectNameInvalid} bind:value={projectName} />\n    <span hidden={!projectNameInvalid}>{validity?.projectName?.message}</span>\n    <button disabled={!$formIsValid}>Update Project Name</button>\n  </div>\n',
            ),
          ),
          Object(o.b)(
            'h2',
            { id: 'adding-powerful-custom-validations-and-enrichment' },
            'Adding powerful custom validations and enrichment',
          ),
          Object(o.b)(
            'p',
            null,
            "While you don't need any configuration to get started, Formula does provide a set of\npowerful ",
            Object(o.b)('a', { parentName: 'p', href: '/docs/options' }, 'configuration options'),
            ' for any form instance, providing custom field and form validations, custom\nerrors messages and custom enrichments which allow you to return additional calculated data.',
          ),
          Object(o.b)('h2', { id: 'full-example' }, 'Full Example'),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              { parentName: 'pre', className: 'language-svelte' },
              "<script>\n  import { get } from 'svelte/store'\n  import { createEventDispatcher} from 'svelte';\n  import { formula } from 'svelte-formula';\n  import { checkPasswordScore } from './password'\n\n  const dispatch = createEventDispatcher();\n\n  const { form, dirty, enrichment, formValidity, formValues, isFormValid, submitValues, touched, validity } = formula({\n    messages: {\n      username: {\n        valueMissing: 'This service requires you enter a username'\n      }\n    },\n    enrich: {\n      password: {\n        passwordStrength: (value) => checkPasswordScore(value),\n      }\n    },\n    validators: {\n      username: {\n        inDomain: (value) => value.includes('@svelte.codes') ? null : 'You can only sign up wit a @svelte.codes domain'\n      },\n      t_and_c: {\n        isChecked: (value) => value ? null : 'You must check the T&Cs to sign up'\n      }\n    },\n    formValidators: {\n      passwordsMatch: (values) => values.password === values.matchPassword ? null : 'Your passwords must match'\n    }\n  })\n\n  $: usernameErr = $touched?.username && $validity?.username?.invalid\n  $: passwordErr = $touched?.password && $validity?.password?.invalid\n  $: passwordsMatchErr = $touched.passwordMatch && $formValidity?.passwordsMatch;\n  $: passwordStrength = $enrichment?.password?.passwordStrength || 0;\n\n\n  function onSubmit() {\n    dispatch('signup', {\n      user: get(submitValues)\n    })\n  }\n</script>\n{passwordStrength}\n<form use:form id='signup' on:submit={onSubmit}>\n  <div hidden={$isFormValid}>\n    There are errors\n  </div>\n\n  <div class='form-field' on:submit={onSubmit}>\n    <label for='username'>Username</label>\n    <input type='email' id='username' name='username' required class:error={usernameErr}>\n    <span hidden={!usernameErr}>{$validity?.username?.message}</span>\n  </div>\n  <div class='form-field'>\n    <label for='password'>Password</label>\n    <input type='password' id='password' name='password' required minlength='8' class:error={passwordErr}>\n    <span hidden={!passwordErr}>{$validity?.password?.message}</span>\n    <meter value={$enrichment?.password?.passwordStrength || 0} min='0' max='100' low='33' high='66'\n           optimum='80'></meter>\n  </div>\n  <div class='form-field'>\n    <label for='passwordMatch'>Password Match</label>\n    <input type='password' id='passwordMatch' name='passwordMatch' required minlength='8'\n           class:error={passwordsMatchErr}>\n    <span hidden={!passwordsMatchErr}>{$formValidity?.passwordsMatch}</span>\n  </div>\n  <div class='form-field'>\n    <label for='t_and_c'>Agree to T&amp;Cs</label>\n    <input type='checkbox' id='t_and_c' name='t_and_c' />\n    <span hidden={$validity?.t_and_c?.valid}>{$validity?.t_and_c?.message}</span>\n  </div>\n\n  <button type='submit' disabled={!$isFormValid}>Signup For Service</button>\n</form>\n\n<style>\n  .error {\n    border: 1px solid red;\n  }\n</style>\n\n",
            ),
          ),
        );
      }
      d.isMDXComponent = !0;
    },
    90: function (e, n, t) {
      'use strict';
      t.d(n, 'a', function () {
        return u;
      }),
        t.d(n, 'b', function () {
          return f;
        });
      var r = t(0),
        a = t.n(r);
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[n] = t),
          e
        );
      }
      function s(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? s(Object(t), !0).forEach(function (n) {
                o(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      function l(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
        }
        return a;
      }
      var c = a.a.createContext({}),
        d = function (e) {
          var n = a.a.useContext(c),
            t = n;
          return e && (t = 'function' == typeof e ? e(n) : i(i({}, n), e)), t;
        },
        u = function (e) {
          var n = d(e.components);
          return a.a.createElement(c.Provider, { value: n }, e.children);
        },
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var n = e.children;
            return a.a.createElement(a.a.Fragment, {}, n);
          },
        },
        m = a.a.forwardRef(function (e, n) {
          var t = e.components,
            r = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = d(t),
            m = r,
            f = u[''.concat(s, '.').concat(m)] || u[m] || p[m] || o;
          return t
            ? a.a.createElement(f, i(i({ ref: n }, c), {}, { components: t }))
            : a.a.createElement(f, i({ ref: n }, c));
        });
      function f(e, n) {
        var t = arguments,
          r = n && n.mdxType;
        if ('string' == typeof e || r) {
          var o = t.length,
            s = new Array(o);
          s[0] = m;
          var i = {};
          for (var l in n) hasOwnProperty.call(n, l) && (i[l] = n[l]);
          (i.originalType = e), (i.mdxType = 'string' == typeof e ? e : r), (s[1] = i);
          for (var c = 2; c < o; c++) s[c] = t[c];
          return a.a.createElement.apply(null, s);
        }
        return a.a.createElement.apply(null, t);
      }
      m.displayName = 'MDXCreateElement';
    },
  },
]);