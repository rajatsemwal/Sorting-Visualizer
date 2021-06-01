const DEFAULT_SCRIPT_ID = 'reactjs-heap';

/**
 * Provides the Heap script to inject.
 */
const getHeapScript = (id: string | number) => `
  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("${id}");
`;

/**
 * Initializes Heap tracking.
 */
const initialize = (id: string | number) => {
  if (!id) {
    throw new Error('You need to provide your Heap Analytics ID.');
  }

  if (!document) {
    return;
  }

  const hasScript = !!document.getElementById(DEFAULT_SCRIPT_ID);

  if (hasScript) {
    return;
  }

  const script = document.createElement('script');

  script.innerHTML = getHeapScript(id);
  script.id = DEFAULT_SCRIPT_ID;
  script.async = true;

  document.body.appendChild(script);
};

/**
 * Object for manipulating Heap Analytics.
 */
const ReactHeap = {
  initialize,
};

export default ReactHeap;
