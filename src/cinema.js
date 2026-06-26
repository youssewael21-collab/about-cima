import { useState } from "react";

import Button from "@mui/material/Button";

export default function Cinema() {
  const [asked, setAsked] = useState([
    { id: 1, name: "اسم شخصيه في فيلم عسل اسود" },
    { id: 2, name: "اسم شخصيه في فيلم الفيل الازرق" },
    { id: 3, name: "اسم حسن حسني في فيلم عسكر في المعسكر " },
    { id: 4, name: "اسم شخصيه في فيلم الممر" },
    { id: 5, name: "اسم فيلم كان فيه مشهد في السجن" },
    { id: 6, name: "اسم فيلم بطله اتورط في جريمه قتل" },
    { id: 7, name: "اسم فيلم فيه اسم حيوان في اسمه" },
    { id: 8, name: "اسم فيلم فيه سجن" },
    { id: 9, name: "اسم فيلم فيه محكمة" },
    { id: 10, name: "اسم فيلم فيه مستشفى" },
    { id: 11, name: "اسم فيلم فيه مدرسة" },
    { id: 12, name: "اسم فيلم فيه جامعة" },
    { id: 13, name: "اسم فيلم فيه فرح" },
    { id: 14, name: "اسم فيلم فيه جنازة" },
    { id: 15, name: "اسم فيلم فيه عملية سرقة" },
    { id: 16, name: "اسم فيلم فيه بنك" },
    { id: 17, name: "اسم فيلم فيه قارب" },
    { id: 18, name: "اسم فيلم فيه طيارة" },
    { id: 19, name: "اسم فيلم فيه قطار" },
    { id: 20, name: "اسم فيلم فيه آثار" },
    { id: 21, name: "اسم فيلم فيه جزيرة" },
    { id: 22, name: "اسم فيلم فيه شبح" },
    { id: 23, name: "اسم فيلم فيه قاتل" },
    { id: 24, name: "اسم فيلم فيه محامي" },
    { id: 25, name: "اسم فيلم فيه مدرس" },
    { id: 26, name: "اسم فيلم فيه لاعب كورة" },
    { id: 27, name: "اسم فيلم فيه مطرب" },
    { id: 48, name: "اسم فيلم فيه توأم" },
    { id: 57, name: "اسم فيلم فيه سفر عبر الزمن" },
    { id: 58, name: "اسم فيلم فيه اسم حيوان" },
    { id: 62, name: "اسم فيلم فيه رقم" },
    { id: 76, name: "اسم فيلم بطله فقير" },
    { id: 77, name: "اسم فيلم بطله غني" },
    { id: 78, name: "اسم فيلم بطله يتيم" },
    { id: 79, name: "اسم فيلم بطله مجرم" },
    { id: 80, name: "اسم فيلم بطله دكتور" },
    { id: 81, name: "اسم فيلم بطله ظابط" },
    { id: 84, name: "اسم فيلم بطله نصاب" },
    { id: 85, name: "اسم فيلم بطله بلطجي" },
    { id: 86, name: "اسم فيلم بطله لاعب كورة" },
    { id: 87, name: "اسم فيلم بطله طفل" },
    { id: 92, name: "اسم فيلم فيه قصة حب" },
    { id: 98, name: "اسم فيلم اتعمل منه جزء تاني" },
    { id: 101, name: "اسم فيلم مبني على قصة حقيقية" },
    { id: 103, name: "اسم فيلم فيه مفاجأة في النهاية" },
    { id: 105, name: "اسم فيلم فيه أغنية مشهورة" },
    { id: 106, name: "اسم فيلم فيه رياضة" },
    { id: 107, name: "اسم فيلم فيه حرب" },
    { id: 108, name: "اسم فيلم فيه جريمة قتل" },
  ]);
  const [theAsked, setTheAsked] = useState(asked[0]);

  return (
    <div
      style={{
        background: "#222",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "gold",
          padding: "20px",
          width: "70%",
          height: "70%",
          borderRadius: "10px",
          boxShadow: "0px 0px 50px 5px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            background: "tomato",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          <h1>{theAsked.name}</h1>
        </div>
      </div>
      <Button
        variant="contained"
        onClick={() =>
          setTheAsked(asked[Math.floor(Math.random() * asked.length)])
        }
        style={{
          width: "30%",
          height: "10%",
          fontSize: "20px",
          margin: "10px",
        }}
      >
        تغير السؤال
      </Button>
    </div>
  );
}
