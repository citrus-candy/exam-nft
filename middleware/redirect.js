export default function({ redirect, store }) {
  const isAuth = store.state.isAuth;
  if (!isAuth) {
    redirect("/");
  }
}
