const Blogs = () => {
  return (
    <div className="mx-20 ">
      <div className=" collapse collapse-plus my-3 py-3 bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Why we should use Context API?
        </div>
        <div className="collapse-content">
          <p>
            When i want to pass any data to a children component from top root
            parent that time we have to pass the data to every root component of
            the child component. Its called props drilling method. To avoid this
            problem we have to use Context API where the top root component will
            declare the data as context api and the child component can get the
            data deractly.{" "}
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus my-3 py-3 bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is Custom Hook?
        </div>
        <div className="collapse-content">
          <p>
            A custom hook in React is a function that allows you to reuse
            stateful logic across different components. It's called a "hook"
            because it can use other React hooks inside of it, like useState or
            useEffect. Custom hooks are useful for keeping your code organized,
            making it easier to share logic between components, and avoiding
            repetitive code. They follow a naming convention starting with "use"
            and can handle things like managing state, fetching data, or
            handling side effects.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus my-3 py-3 bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is useRef ?
        </div>
        <div className="collapse-content">
          <p>useRef is a react hook which is use for dom manipulation.</p>
        </div>
      </div>
      <div className="collapse collapse-plus my-3 py-3 bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is useMemo?
        </div>
        <div className="collapse-content">
          <p>The React useMemo Hook returns a memoized value.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
