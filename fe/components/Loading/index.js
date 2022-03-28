import style from './loading.module.css'

function Loading() {
  return (
    <div class={style.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
