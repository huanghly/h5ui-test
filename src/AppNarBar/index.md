```jsx | preview
// 我会被渲染为 React 组件
import React from 'react';
import AppNarBar from './index.tsx';


class App extends React.Component {
  render() {
    const HeaderRightContent = () => {
     return <div>header right conteng</div>
   }

   const HeaderLeftContent = () => {
      return <div>HeaderLeftContent</div>
   }
    return (
      <div>
       <AppNarBar 
          title={'测试title'}  
          rightContent={<HeaderRightContent />}
          leftContent={<HeaderLeftContent />}
          className="diary-detail-navbar"/>
      </div>
    );
  }
}

export default () => <App />;
```


