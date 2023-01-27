<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="V-Model">
          V-Model
        </h1>

        <p>
          <mark>V-model</mark> is a Vue directive that creates a two-way data binding between
          a form input and a data property. It allows you to bind the value of an
          input element to a data property and automatically update that property
          when the input value changes. <mark>v-model</mark> is shorthand for using both <mark>v-bind</mark>
          and <mark>v-on</mark> together.
        </p>

        <p>
          To use <mark>v-model</mark> on an input element, you just need to add the directive
          to the element and bind it to a data property. For example:
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;input v-model="message"&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      message: 'Hello World'
    }
  }
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In this example, the value of the input element is bound to the
          <mark>message</mark> data property, so when the input value changes, the <mark>message</mark>
          property is updated, and when the <mark>message</mark> property changes, the
          input value changes.
        </p>

        <h2 id="Compatability">
          Compatability
        </h2>

        <p>
          v-model works with most form input elements, including text inputs, checkboxes,
          radio buttons, select elements, and textareas. However, some input elements
          may require additional configuration.
        </p>

        <h3 id="TextInputs">
          Text Inputs
        </h3>

        <p>
          v-model works out of the box with text inputs, so you can simply add the directive to a
          text input element and bind it to a data property.
        </p>

        <h3 id="Checkboxes">
          Checkboxes
        </h3>

        <p>
          To use v-model with a checkbox, you need to bind the v-model directive to the
          value attribute of the checkbox, and add a :value binding to the v-bind
          directive. For example:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;input type="checkbox" v-model="isChecked" :value="true"&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isChecked: false
    }
  }
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h3 id="RadioButtons">
          Radio Buttons
        </h3>
        <p>
          To use v-model with radio buttons, you need to give each radio button
          the same name attribute and bind the v-model directive to the value of the
          selected radio button. For example:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;input type="radio" v-model="selectedOption" value="option1"&gt;
  &lt;input type="radio" v-model="selectedOption" value="option2"&gt;
  &lt;input type="radio" v-model="selectedOption" value="option3"&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      selectedOption: 'option1'
    }
  }
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h3 id="SelectElements">
          Select Elements
        </h3>
        <p>
          To use v-model with a select element, you need to bind the v-model directive to the
          value attribute of the select element. For example:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;select v-model="selectedOption"&gt;
    &lt;option value="option1"&gt;Option 1&lt;/option&gt;
    &lt;option value="option2"&gt;Option 2&lt;/option&gt;
    &lt;option value="option3"&gt;Option 3&lt;/option&gt;
  &lt;/select&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      selectedOption: 'option1'
    }
  }
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h2 id="Modifiers">
          Modifiers
        </h2>
        <p>
          v-model also supports a number of modifiers that can be used to
          modify the behavior of the two-way binding. Some of the most commonly
          used modifiers include:
        </p>
        <ul>
          <li> <mark>.lazy</mark> - This modifier causes the data property to be updated only when the input element loses focus, instead of updating it immediately when the input value changes. </li>
          <li> <mark>.number</mark> - This modifier automatically converts the input value to a number before updating the data property. </li>
          <li> <mark>.trim</mark> - This modifier automatically trims whitespace from the input value before updating the data property. </li>
        </ul>
        <FooterBar />
      </div>
    </div>

    <div class="articleNavigationContainer">
      <ArticleNavigation
        :new-headers="newHeaders"
      />
    </div>
  </section>
</template>

<script>
import TopBar from '../../../components/topBar/topBar.vue'
import ArticleNavigation from '../../../components/articleNavigation.vue'
import CodeBlock from '../../../components/codeBlock.vue'
import FooterBar from '../../../components/footerBar.vue'

export default {
  name: 'VModelDocumentation',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['V-Model', 'Compatability', 'Text Inputs',
        'Checkboxes', 'Radio Buttons', 'Select Elements', 'Modifiers']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
