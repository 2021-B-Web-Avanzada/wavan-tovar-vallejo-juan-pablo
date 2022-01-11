import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  arregloOpciones = [
    {
      opcion:"Tu canal",
      icono:"M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"
    },
    {
      opcion:"Compras y suscripciones",
      icono:"M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z M12.45,10.95c-0.67-0.22-1.18-0.47-1.52-0.72c-0.34-0.26-0.52-0.57-0.52-0.95c0-0.41,0.15-0.73,0.44-0.98 c0.29-0.25,0.71-0.37,1.24-0.37c0.55,0,1.23,0.15,1.53,0.44C13.8,8.53,13.93,8.75,14,9h2c-0.07-0.46-0.26-0.88-0.49-1.27 c-0.33-0.55-0.78-0.98-1.37-1.28C13.79,6.27,13.41,6.17,13,6.09V5h-2v1.12c-0.31,0.07-0.62,0.16-0.9,0.29 C9.5,6.7,9.04,7.08,8.72,7.58C8.4,8.07,8.24,8.63,8.24,9.26c0,1.21,0.6,2.18,1.8,2.9c0.44,0.26,1.04,0.53,1.79,0.8 c0.75,0.27,1.27,0.53,1.56,0.77c0.29,0.24,0.43,0.59,0.43,1.05c0,0.42-0.14,0.74-0.43,0.97c-0.29,0.23-0.69,0.35-1.21,0.35 c-1.05,0-1.92-0.37-2.18-1.1H8c0.08,0.42,0.22,0.81,0.44,1.16c0.35,0.57,0.86,1.02,1.52,1.35c0.33,0.16,0.67,0.28,1.04,0.37V19h2 v-1.05c0.79-0.11,1.45-0.38,1.97-0.81c0.69-0.57,1.03-1.37,1.03-2.38c0-0.91-0.28-1.67-0.85-2.28S13.69,11.36,12.45,10.95z"
    },
    {
      opcion:"YouTube Studio",
      icono:"M10,9l5.2,3L10,15V9z M13.22,3h-2.44l-0.55,2.2L10.1,5.71L9.61,5.9C9,6.12,8.42,6.45,7.88,6.88L7.48,7.2l-0.5-0.14 L4.82,6.44L3.6,8.56l1.63,1.59l0.37,0.36l-0.08,0.51C5.47,11.34,5.44,11.67,5.44,12s0.03,0.66,0.08,0.98l0.08,0.51l-0.37,0.36 L3.6,15.44l1.22,2.11l2.17-0.62l0.5-0.14l0.4,0.32C8.42,17.55,9,17.88,9.61,18.1l0.5,0.18l0.13,0.51l0.55,2.2h2.44l0.55-2.2 l0.13-0.51l0.5-0.18c0.61-0.23,1.19-0.56,1.72-0.98l0.4-0.32l0.5,0.14l2.17,0.62l1.22-2.11l-1.63-1.59l-0.37-0.36l0.08-0.51 c0.05-0.32,0.08-0.64,0.08-0.98s-0.03-0.66-0.08-0.98l-0.08-0.51l0.37-0.36l1.63-1.59l-1.22-2.11l-2.17,0.62l-0.5,0.14l-0.4-0.32 C15.58,6.45,15,6.12,14.39,5.9l-0.5-0.18L13.77,5.2L13.22,3 M14,2l0.74,2.96c0.73,0.27,1.4,0.66,2,1.14l2.92-0.83l2,3.46l-2.19,2.13 c0.06,0.37,0.09,0.75,0.09,1.14s-0.03,0.77-0.09,1.14l2.19,2.13l-2,3.46l-2.92-0.83c-0.6,0.48-1.27,0.87-2,1.14L14,22h-4l-0.74-2.96 c-0.73-0.27-1.4-0.66-2-1.14l-2.92,0.83l-2-3.46l2.19-2.13C4.47,12.77,4.44,12.39,4.44,12s0.03-0.77,0.09-1.14L2.34,8.73l2-3.46 L7.26,6.1c0.6-0.48,1.27-0.87,2-1.14L10,2H14L14,2z"
    },
    {
      opcion:"Cambiar de cuenta",
      icono:"M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z"
    },
    {
      opcion:"Cerrar sesión",
      icono:"M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
    },
    ]

  arregloNotificaciones = [
    {
      nombre: "YOUR NAME - 'Sparkle' [Sub español / english]",
      creador: "AISA",
      cantidadVistas: "3.498.451",
      fecha: "8 meses",
      linkMiniatura: "https://i.ytimg.com/vi/jFu4iOw4pQU/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLArHF8iQovZawqbFk7rUxGJMy2fhA",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLRfzGoxoAHoMPBRqCeS0vNon0v6qyVPpjTpohDN9w=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "the best of Kate Bishop & Yelena Belova (Hawkeye)",
      creador: "ALCHEMY",
      cantidadVistas: "2,8 M",
      fecha: "12 días",
      linkMiniatura: "https://i.ytimg.com/vi/eeoEv03xWlE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBgP00ZjFVWQGG5Q3zUL-0cjFWf2Q",
      linkFotoPerfil: "https://yt3.ggpht.com/o3xYixBAtY1f78pW9MKWLcO1bfr6CZEdDCXIN7C-dyL9a4k5Uc7dwAqPLO-vq7DtvVZUx6LdLA=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "Comic - Comic (Full Album)",
      creador: "Francisco García M.",
      cantidadVistas: "292 M",
      fecha: "2 años",
      linkMiniatura: "https://i.ytimg.com/vi/a2LJtf6-kVI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLASiWRNhF83ADEzRWz25DRjQ1bSVg",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLSUI6ldTU8lZmlF3fZV7mxOsw_4UkcM-4q6Obkn0w=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "Jujutsu Kaisen 0: PELÍCULA | Tráiler Oficial (Sub. Español)",
      creador: "Runny Anime",
      cantidadVistas: "261.991",
      fecha: "3 días",
      linkMiniatura: "https://i.ytimg.com/vi/r0EJbhYz6-0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBoTOwYr_33b82Y8w22ASZmo20TQQ",
      linkFotoPerfil: "https://yt3.ggpht.com/RyCnflFjcmUNUSa4G67krS6oPRyScGtu-O8_qCDHNG2YNuMFGJG8C87_MCTEODLTtXUIWxlALQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "¿EL ARMA MAS ODIADA DE COD WARZONE? RECORTADAS DUALES OP",
      creador: "Soki",
      cantidadVistas: "39.927",
      fecha: "6 horas",
      linkMiniatura: "https://i.ytimg.com/vi/Zv4byI3HDnM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtL-dlRvwM_0FAlFmaliOeCd75RQ",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLSI0wIL46wujkMG2KXBh1eMTTJnZKJNfMAt_wTtzQ=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "my name is giovanni giorgio",
      creador: "Re Ku",
      cantidadVistas: "883.754",
      fecha: "1 año",
      linkMiniatura: "https://i.ytimg.com/vi/lRBQ9-acs5o/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCrp6EzNkmrNhxO1i3-xOiYuOUbPg",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLSaYr7sCgXXC1zdzaAmo1oGi8UHedhyASlFQAeb-w=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "Compilado bloopers SupraPixel 2021",
      creador: "Suprapixel",
      cantidadVistas: "53.894",
      fecha: "4 días",
      linkMiniatura: "https://i.ytimg.com/vi/jPe9y3njf-Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCQSTmQ_mOPFZ7v-QXERxNszmnAaw",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLRcKGIH-eFyb_5tmMUsAyo_zpNQqwA9K76FBaZYtg=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      nombre: "Nuevas GPUs? Veamos la presentación de NVIDIA en CES 2022!!",
      creador: "Micahel Quesada",
      cantidadVistas: "522",
      fecha: "21 minutos",
      linkMiniatura: "https://i.ytimg.com/vi/tZgNxrltkQY/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDyU3hsLdSA5JSHQMUc3-UDl8hnuw",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLTOnYYtCe2KwkKQqzUkuho0sr4M7-Ow7bKqOxeG1g=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "Expectations not met... We're testing the MSI Z690 Godlike",
      creador: "der8auer EN",
      cantidadVistas: "130.783",
      fecha: "2 semanas",
      linkMiniatura: "https://i.ytimg.com/vi/ntO_d426L0I/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBmK0HCAvcclBgziMGPA1lnMDp4ag",
      linkFotoPerfil: "https://yt3.ggpht.com/fQFzqHX9cPKKDqwTTKOkZcjS1nVPENtSOWIijJOuQ2Nyu17q6ivDVt4SdOrp-NinOepDD0ET7w=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "the judge - twenty one pilots | ariel ukulele cover",
      creador: "aryy",
      cantidadVistas: "188.319",
      fecha: "1 año",
      linkMiniatura: "https://i.ytimg.com/vi/dMp2xsRhOks/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAjUJemFLsjFVPwtIdYHmhW8k4EVw",
      linkFotoPerfil: "https://yt3.ggpht.com/0N9Y0-KYAqy8KznSlKI5eZY6o_BSagMTDuSWxml1lcdwZtAn-QHkZIwrz86u_clq9mbM2MLmnQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      nombre: "ME APARECIO UN FANTASMA 😮",
      creador: "ZilverK",
      cantidadVistas: "244.462",
      fecha: "6 días",
      linkMiniatura: "https://i.ytimg.com/vi/z9esXilEql0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB0lzICdTTkgnqZSwVYJDaSXejcIA",
      linkFotoPerfil: "https://yt3.ggpht.com/Qz0J4TyKyUYy656cBqCUL6dUZJI6wfd4cG8bNoMZ6f5DH5wkqojgdsevCCe8zlTA961HgG17AA=s68-c-k-c0x00ffffff-no-rj",
    }, {
      nombre: "Gráficos ULTRA REALISTAS en CONSOLA!!",
      creador: "SupraPixel",
      cantidadVistas: "81.926",
      fecha: "12 días",
      linkMiniatura: "https://i.ytimg.com/vi/tV3-G-cdPik/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAgQmpzseZ7YZlbluI3-RwMp2bCBA",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLRcKGIH-eFyb_5tmMUsAyo_zpNQqwA9K76FBaZYtg=s176-c-k-c0x00ffffff-no-rj-mo",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
