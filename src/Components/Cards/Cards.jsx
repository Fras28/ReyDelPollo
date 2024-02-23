import React from "react";
import { Card } from "./Card/Card";

import "./Cards.css";

export const Cards = ({ products }) => {
  // console.log(products[0]?.attributes, "que llega a la card");
  return (
    <div className="carta" >
      <h2 className="titleSection">
      <svg width="50"  viewBox="0 0 98 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.9449 23.6797C57.9203 23.5503 57.9215 23.4174 57.9484 23.2884C57.9753 23.1595 58.0275 23.0372 58.1018 22.9285C58.1761 22.8198 58.2712 22.7268 58.3816 22.6549C58.4919 22.5831 58.6154 22.5337 58.7449 22.5097C60.4559 22.1846 62.1932 22.0173 63.9349 22.0097H64.2749C74.4249 22.1697 79.6849 27.0697 82.2749 31.1397C82.3472 31.2504 82.3968 31.3744 82.4208 31.5045C82.4449 31.6345 82.4429 31.768 82.415 31.8973C82.3871 32.0266 82.3338 32.149 82.2583 32.2576C82.1828 32.3661 82.0864 32.4586 81.9749 32.5297C81.812 32.6294 81.6258 32.6846 81.4349 32.6897C81.2676 32.6894 81.103 32.6472 80.9562 32.5668C80.8095 32.4864 80.6852 32.3705 80.5949 32.2297C78.2249 28.5597 73.4649 24.1597 64.2149 24.0097H63.9449C62.3239 24.0177 60.707 24.1751 59.1149 24.4797C58.9855 24.5043 58.8525 24.5031 58.7236 24.4762C58.5947 24.4492 58.4724 24.3971 58.3637 24.3228C58.255 24.2484 58.162 24.1534 58.0901 24.043C58.0183 23.9326 57.9689 23.8092 57.9449 23.6797ZM54.3149 25.6797C54.4177 25.6941 54.522 25.6941 54.6249 25.6797C55.1449 25.4997 55.6249 25.3397 56.1649 25.1997C56.4208 25.1268 56.6373 24.9551 56.7667 24.7226C56.8961 24.4901 56.9278 24.2156 56.8549 23.9597C56.7819 23.7038 56.6103 23.4873 56.3778 23.3579C56.1452 23.2285 55.8708 23.1968 55.6149 23.2697C55.0749 23.4297 54.5349 23.5997 53.9949 23.7797C53.8699 23.8214 53.7545 23.8875 53.6551 23.974C53.5558 24.0605 53.4745 24.1658 53.4159 24.2838C53.3574 24.4018 53.3228 24.5302 53.314 24.6616C53.3052 24.7931 53.3225 24.925 53.3649 25.0497C53.4329 25.2382 53.5561 25.402 53.7184 25.5197C53.8806 25.6374 54.0745 25.7036 54.2749 25.7097L54.3149 25.6797ZM0.0148822 15.3397C0.0634133 14.7218 0.273801 14.1275 0.624886 13.6167C0.975971 13.1058 1.45537 12.6965 2.01488 12.4297C2.70374 12.1059 3.43952 11.8933 4.19488 11.7997C4.29522 11.0541 4.51114 10.3288 4.83488 9.6497C5.10247 9.0888 5.5134 8.60848 6.02612 8.2573C6.53884 7.90612 7.13519 7.69653 7.75488 7.6497C8.40085 7.60905 9.04622 7.73811 9.62687 8.02405C10.2075 8.31 10.7033 8.74288 11.0649 9.2797C11.7237 10.3042 12.0325 11.5148 11.9449 12.7297C11.9139 13.3022 11.9999 13.875 12.1976 14.4131C12.3953 14.9512 12.7006 15.4435 13.0949 15.8597L18.4849 21.3497C21.7449 20.1597 25.4449 21.0197 28.6449 22.4097C28.5314 21.0505 28.7262 19.6831 29.2149 18.4097L23.8449 13.1597C23.4363 12.7587 22.9489 12.4467 22.4136 12.2436C21.8783 12.0405 21.3067 11.9506 20.7349 11.9797C19.5215 12.0446 18.3193 11.7186 17.3049 11.0497C16.7676 10.6868 16.3352 10.189 16.0509 9.60634C15.7666 9.02366 15.6404 8.37651 15.6849 7.7297C15.7354 7.11232 15.9466 6.5189 16.2974 6.0084C16.6483 5.4979 17.1266 5.08809 17.6849 4.8197C18.3712 4.49253 19.1026 4.27006 19.8549 4.1597C19.9552 3.41413 20.1711 2.68876 20.4949 2.0097C20.7625 1.44677 21.1747 0.964991 21.6895 0.613599C22.2043 0.262207 22.8032 0.053806 23.4249 0.00969582C24.0692 -0.0374246 24.7145 0.0877925 25.2944 0.372491C25.8744 0.657189 26.3681 1.09111 26.7249 1.62969C27.3935 2.64384 27.7163 3.84705 27.6449 5.0597C27.6134 5.63306 27.7002 6.20676 27.8997 6.7452C28.0993 7.28363 28.4074 7.77531 28.8049 8.1897L34.1749 13.6597C40.9049 11.1997 49.7249 17.6597 51.7149 19.1997L52.3449 18.9897C56.2002 17.6381 60.2597 16.9615 64.3449 16.9897C73.9449 17.1597 81.8249 21.2197 86.4749 28.4397C88.3332 31.4381 89.552 34.7881 90.0549 38.2797C91.7049 48.4297 87.9449 56.0097 78.9449 60.8597H93.7849C94.8705 60.8597 95.9119 61.2903 96.6805 62.057C97.4491 62.8238 97.8822 63.864 97.8849 64.9497C97.8903 66.0196 97.4731 67.0484 96.7241 67.8124C95.975 68.5764 94.9547 69.0139 93.8849 69.0297C93.6433 71.0282 92.6794 72.8695 91.1746 74.2067C89.6698 75.5439 87.728 76.2847 85.7149 76.2897H28.8249C26.8107 76.285 24.8676 75.5445 23.3612 74.2075C21.8547 72.8705 20.8887 71.0291 20.6449 69.0297C19.5956 68.9647 18.6116 68.4981 17.8972 67.7267C17.1829 66.9554 16.7929 65.9387 16.8084 64.8875C16.8238 63.8363 17.2434 62.8314 17.9802 62.0814C18.7169 61.3314 19.7141 60.8939 20.7649 60.8597H32.9449C23.2349 56.3497 22.0749 48.9497 21.9449 47.1597C20.1949 45.1597 10.4749 33.7797 13.5449 26.1597L8.17488 20.8397C7.76627 20.4387 7.27891 20.1267 6.7436 19.9236C6.2083 19.7205 5.63669 19.6306 5.06488 19.6597C3.8509 19.7303 2.64692 19.4039 1.63488 18.7297C1.08523 18.3623 0.644719 17.8536 0.35965 17.257C0.0745811 16.6605 -0.0445145 15.9982 0.0148822 15.3397ZM91.8849 69.0397H22.6549C22.8962 70.5032 23.6485 71.8338 24.7781 72.795C25.9078 73.7562 27.3416 74.2858 28.8249 74.2897H85.7249C87.207 74.2854 88.6395 73.7555 89.7675 72.7941C90.8954 71.8328 91.6458 70.5024 91.8849 69.0397ZM93.7849 62.8597H20.7849C20.2249 62.8619 19.6874 63.0804 19.2849 63.4697C18.9014 63.8671 18.6864 64.3974 18.6849 64.9497C18.6875 65.5049 18.9099 66.0365 19.3035 66.4282C19.697 66.8198 20.2297 67.0397 20.7849 67.0397H93.7849C94.0606 67.0423 94.334 66.9902 94.5893 66.8862C94.8447 66.7822 95.0768 66.6286 95.2722 66.4341C95.4676 66.2396 95.6224 66.0082 95.7276 65.7534C95.8327 65.4986 95.8862 65.2254 95.8849 64.9497C95.8849 64.6744 95.8305 64.4018 95.7248 64.1476C95.6192 63.8934 95.4643 63.6625 95.2692 63.4683C95.0741 63.2741 94.8425 63.1203 94.5878 63.0159C94.333 62.9115 94.0602 62.8584 93.7849 62.8597ZM25.2549 11.7197L30.2549 16.6597C30.3149 16.5897 30.3849 16.5297 30.4349 16.4597C30.6417 16.2016 30.862 15.9546 31.0949 15.7197L31.4849 15.3597C31.6649 15.1897 31.8649 15.0397 32.0649 14.8797C32.2649 14.7197 32.2349 14.7297 32.3249 14.6697L27.3949 9.6697C26.8085 9.0632 26.3525 8.34308 26.055 7.55369C25.7575 6.76429 25.6247 5.92234 25.6649 5.0797C25.7248 4.2908 25.5246 3.50401 25.0949 2.8397C24.9336 2.59013 24.7086 2.38812 24.4431 2.25452C24.1777 2.12092 23.8814 2.06057 23.5849 2.0797C23.3137 2.09884 23.0525 2.18941 22.8277 2.34222C22.6028 2.49502 22.4225 2.70462 22.3049 2.9497C21.9798 3.64365 21.7929 4.3943 21.7549 5.1597C21.7388 5.39936 21.637 5.62523 21.468 5.796C21.2991 5.96676 21.0744 6.07102 20.8349 6.0897C20.052 6.11712 19.2816 6.29361 18.5649 6.6097C18.3182 6.72083 18.1062 6.89661 17.9513 7.11843C17.7963 7.34025 17.7043 7.59983 17.6849 7.86969C17.6642 8.16924 17.7237 8.46889 17.8573 8.7378C17.9909 9.00671 18.1937 9.23518 18.4449 9.3997C19.1076 9.82457 19.8896 10.0245 20.6749 9.9697H20.8649C21.6758 9.95805 22.481 10.1066 23.2344 10.407C23.9877 10.7073 24.6744 11.1534 25.2549 11.7197ZM30.7749 23.4397C32.5535 24.4003 34.2552 25.4969 35.8649 26.7197C36.4949 26.3097 37.1449 25.9197 37.8049 25.5297L38.6149 25.0697L39.7249 24.4497L40.7249 23.8997L41.5449 23.4797C41.9549 23.2797 42.3549 23.0697 42.7649 22.8797L43.1149 22.7197C44.6849 21.9797 46.2249 21.3197 47.6849 20.7197L47.9849 20.5997L49.2749 20.0997L49.4049 20.0497C46.4049 17.9197 39.2649 13.4597 34.3049 15.7797C33.3055 16.2624 32.4376 16.9794 31.7749 17.8697C31.5753 18.1275 31.398 18.4019 31.2449 18.6897C30.5787 20.1805 30.4138 21.8472 30.7749 23.4397ZM18.6749 23.4397C17.6752 23.913 16.8091 24.6279 16.1549 25.5197C15.9507 25.7742 15.7731 26.049 15.6249 26.3397C12.1849 32.9697 22.5249 44.7897 23.5649 45.9597C24.6694 46.6233 25.8807 47.0902 27.1449 47.3397C27.4101 47.3609 27.656 47.4866 27.8286 47.6892C28.0011 47.8917 28.0861 48.1545 28.0649 48.4197C28.0437 48.6849 27.918 48.9308 27.7154 49.1034C27.5129 49.2759 27.2501 49.3609 26.9849 49.3397H26.8149C25.9045 49.1809 25.0176 48.9088 24.1749 48.5297C24.9449 51.5897 27.7649 57.9297 38.9449 60.8597H74.1049C85.2349 56.5297 89.8049 49.2497 88.1049 38.5997C87.6408 35.3799 86.5211 32.2895 84.8149 29.5197C80.5149 22.8797 73.2349 19.1597 64.2849 19.0097C60.4246 19.0075 56.5914 19.6531 52.9449 20.9197L51.6149 21.3897L50.4649 21.8097L49.9249 22.0097L48.5549 22.5397L48.1149 22.7197L46.5749 23.3597L46.1749 23.5297L44.5649 24.2497L44.0949 24.4697C43.5749 24.7197 43.0949 24.9697 42.5149 25.2397L41.9449 25.5597C41.4649 25.8097 40.9449 26.0497 40.5149 26.3097L39.5149 26.8697L38.4149 27.4997C38.0749 27.6997 37.7349 27.9297 37.4149 28.1397C38.9124 29.7116 40.0837 31.5646 40.8612 33.5916C41.6387 35.6186 42.007 37.7796 41.9449 39.9497C41.9449 40.2149 41.8395 40.4693 41.652 40.6568C41.4645 40.8443 41.2101 40.9497 40.9449 40.9497C40.6797 40.9497 40.4253 40.8443 40.2378 40.6568C40.0502 40.4693 39.9449 40.2149 39.9449 39.9497C40.0195 37.8386 39.6281 35.737 38.7984 33.7944C37.9688 31.8517 36.7214 30.1157 35.1449 28.7097H35.0849C34.7549 28.4397 33.8749 27.7697 32.6549 26.9597L32.2349 26.6897L31.9849 26.5297L31.7649 26.3897C31.0849 25.9697 30.3349 25.5397 29.5349 25.1297C26.0749 23.2697 21.9449 21.8997 18.6749 23.4197V23.4397ZM2.01488 15.4897C1.99527 15.7891 2.05525 16.0884 2.18874 16.3571C2.32222 16.6258 2.52445 16.8544 2.77488 17.0197C3.43641 17.4472 4.21933 17.6474 5.00488 17.5897H5.19488C6.00649 17.5794 6.81214 17.7295 7.56553 18.0316C8.31891 18.3336 9.00518 18.7816 9.58488 19.3497L14.5849 24.2797C14.8539 23.9257 15.148 23.5915 15.4649 23.2797L15.7349 23.0297C15.968 22.8135 16.2152 22.6131 16.4749 22.4297C16.5349 22.3797 16.5949 22.3197 16.6549 22.2797L11.7249 17.2797C11.1252 16.6743 10.6575 15.9512 10.3512 15.1561C10.0448 14.3609 9.90647 13.5109 9.94488 12.6597C10.0033 11.8741 9.80311 11.0909 9.37488 10.4297C9.21121 10.1801 8.98435 9.97824 8.71736 9.84474C8.45037 9.71125 8.15279 9.65085 7.85488 9.6697C7.58548 9.69054 7.3263 9.78191 7.10337 9.93462C6.88045 10.0873 6.70164 10.296 6.58488 10.5397C6.26766 11.246 6.08779 12.0062 6.05488 12.7797C6.03851 13.021 5.93527 13.2481 5.76428 13.4191C5.5933 13.5901 5.36614 13.6933 5.12488 13.7097C4.37329 13.746 3.63458 13.9188 2.94488 14.2197C2.68934 14.3273 2.46783 14.5022 2.30403 14.7259C2.14023 14.9496 2.04028 15.2136 2.01488 15.4897Z" fill="black"/>
</svg>

        {products[0]?.attributes?.sub_categoria?.data?.attributes?.name.toUpperCase()}
      </h2>
      <div className="rowsCard">
        {products?.map((e) => (
          <Card producto={e} />
        ))}
      </div>
    </div>
  );
};

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}
