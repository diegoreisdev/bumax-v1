export interface ClientItem {
  id: string;
  logo: string;
  href: string;
}

export const CLIENTS: ClientItem[] = [
  {
    id: "nibo",
    logo: "https://bureaucontabilidade.com/wp-content/uploads/sites/222/2021/05/logo2-nibo-gd-branco-360x122-1.png",
    href: "https://passport.nibo.com.br/Account/Login?ReturnUrl=%2Fauthorize%3Fresponse_type%3Dtoken%26client_id%3D103416FE-A280-466A-9D28-642ACEE21C3B%26lu%3D1%26redirect_uri%3Dhttps%253A%252F%252Fmeucontador.nibo.com.br%252Fv4%252Flogin%252Fcallback%253Fredirect_uri%253Dhttps%25253A%25252F%25252Fmeucontador.nibo.com.br%25252Fv4%25252F%26Origin%3Dmeucontador-origin",
  },
  {
    id: "zen",
    logo: "https://bureaucontabilidade.com/wp-content/uploads/sites/222/2021/05/logo-questor-zen-1.png",
    href: "https://bureaucontabilidade.app.questorpublico.com.br/entrar",
  },
];
