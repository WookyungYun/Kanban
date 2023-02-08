# 오류 및 에러 해결

> - Drag & Drop 기능 구현을 처음 해봤는데 구현 ui가 가장 비슷해보였던 react-beautiful-dnd를 선택했다. 컬럼을 이동시키기 위해서는 Drag & Drop이 중첩되어야 했는데 헷갈리지 않기 위해
>   'type' 속성을 추가해서 구분했다.
> - 또한 , 셋팅하기 용이하고 사용방법이 useState와 비슷한 Recoil을 사용하였다.

<br></br>

![img2](https://user-images.githubusercontent.com/116490063/212017390-71cf99b0-ce18-430e-8a85-1ce79b1600b7.png)

- draggableId는 항상 string형태로 받아야 한다.
  <br></br>
- 처음엔 숫자형태의 index를 string으로 설정했지만, 그렇게 되면 각 컬럼간 아이템의 index는 0,1,2,3으로 겹치게 된다 -> 이렇게 되면 drag할 아이템을 선택할 때 다중 선택이 되므로 고유한 아이디를 가질 수 있게 해줘야한다.

<br></br>
![칸반이미지](https://user-images.githubusercontent.com/116490063/212019753-4f38aaa8-9d2b-4867-8f63-2120835480f1.png)

- 효율적인 UI 구현을 위해 Input태그로 구현한 것을 react-ContentEditable 라이브러리를 사용하였다. 단, 가이드에 따라 useState를 사용해서 관리하는 것이 아닌 useRef를 사용해야 했다.

<br></br>

- 아이템 또는 컬럼을 드랍할때는 onDragEnd 이벤트를 사용해야하는데 함수 구현에 문제가 있었다.
  배열을 바꿔도 렌더링이 되지 않았다. React는 원본과 비교하여 상태가 변화게 되면 그 부분만 렌더링을 해주는 장점이 있는데 그 점이 활용이 안되었던 것이다. 같은 참조값을 끊어내기 위해
  깊은 복사를 해주었고, 그 결과 아래와 같은 코드를 짤 수 있었다.
  ![deepcopy](https://user-images.githubusercontent.com/116490063/212021065-03d4ca23-a473-4ba9-b973-29533e7dc570.png)

<br></br>

- 내가 사용한 깊은복사 코드
  > 일반적으로 obj에 함수가 들어가면 결과값이 제대로 안나올 수 있다. 그럴 경우에는 lodash를 사용해도 된다. 여기서도 사용할 수 있지만 배열을 넣는 경우이고 작은 프로젝트라 라이브러리를 사용하지 않고 하고싶었기 때문에 아래와 같은 방법을 사용했다.

```
export const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
```

<br></br>
