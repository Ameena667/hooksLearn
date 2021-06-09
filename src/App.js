import React, { useState } from "react";

import "./App.css";

//import PatternOne from "./AssignmentPhase2/PatternOne";
//import DisplayTime from "./AssignmentPhase2/DisplayTime";
//import UseRefHook from "./AssignmentPhase2/UseRefHook";
//import UseMemoHook from "./AssignmentPhase2/UseMemoHook";
//import WindowResize from "./AssignmentPhase2/WindowResize";
//import UseEffectHook from "./AssignmentPhase2/UseEffectHook";
//import HookCounter from "./AssignmentPhase2/HookCounter";
//import UseContextHook from "./AssignmentPhase2/UseContextHook";
//import HookCounterTwo from "./AssignmentPhase2/HookCounterTwo";
//import HookCounterThree from "./AssignmentPhase2/HookCounterThree";
//Advanced Topics

import PassinngDataFromFunctionToClass from "./AdvancedTopics/PassinngDataFromFunctionToClass";
import PassingDataFromFuntionToFunction from "./AdvancedTopics/PassingDataFromFuntionToFunction";
import { UserProvider } from "./AdvancedTopics/UserContext";
import ChildA from "./AdvancedTopics/ChildA";
import ErrorBoundary from "./ErrorBoundariesExamples/ErrorBoundary";
import Hero from "./ErrorBoundariesExamples/Hero";

//import { lazy, Suspense } from "react";
/*const LazyLoadingExample = lazy(() => {
  import("./LazyLoading/LazyLoadingExample");
});*/
function App() {
  const [count, setCount] = useState("shaik");
  const [name, setName] = useState("ameena");

  return (
    <div className="App">
      {/*<HookCounter />*/}
      {/*<HookCounterTwo /> */}
      {/*<HookCounterThree />*/}
      {/*<UseEffectHook />*/}
      {/*<UseMemoHook />*/}
      {/*<UseRefHook />*/}
      {/*<DisplayTime />*/}
      {/*<UseContextHook />*/}
      {/*advanced topics */}
      <PassingDataFromFuntionToFunction count={count} />
      <PassinngDataFromFunctionToClass count={name} />
      <UserProvider value={{ count, name, setName }}>
        <ChildA />
      </UserProvider>
      {/*<h1>hello</h1>*/}
      <ErrorBoundary>
        <Hero name="NTR" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name="Mahesh" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="rehan" />
      </ErrorBoundary>
      {/*<h1>hello</h1>*/}
      {/*<h1>hi</h1>
      <Suspense fallback={() => <div>loading...</div>}>
        <LazyLoadingExample />
      </Suspense>
      <h1>hi</h1>*/}
      <h1>hi</h1>
    </div>
  );
}

export default App;

//<UserProvider value="ameena">
//<ChildA />
//</UserProvider>
