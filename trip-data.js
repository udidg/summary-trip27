/**
 * תכנון טיול קיץ 2027 – גל ואודי דגן
 * קובץ הנתונים הראשי (TRIP_DATA)
 * 
 * קובץ זה מרכז את כל המידע, המסלולים, הימים, המחירים והתמונות.
 * כל עדכון בתוכן (ימים, פעילויות, עלויות) מתבצע ישירות כאן בצורה פשוטה ונקייה!
 */

const TRIP_DATA = {
  destinations: [
  {
    "id": "tab-florida",
    "icon": "🚀",
    "name": "פלורידה",
    "shortName": "פלורידה",
    "sub": "מיאמי, חלל, אורלנדו, שיט דולפינים",
    "costBadge": "~55,000 ₪",
    "flightTag": "✈️ ישיר באל על",
    "desc": "טיסת לילה ישירה באל על למיאמי (Dreamliner 787), יומיים התאקלמות ומונית Waymo ללא נהג, שבוע בווילה פרטית עם בריכה באורלנדו, שיגור SpaceX ומרכז החלל קנדי.",
    "tags": [
      {
        "text": "~55,000 ₪",
        "cls": "price-tag"
      },
      {
        "text": "✈️ ישיר באל על",
        "cls": "flight-tag"
      },
      {
        "text": "וילה פרטית עם בריכה",
        "cls": ""
      },
      {
        "text": "מונית Waymo ומרכז חלל",
        "cls": ""
      }
    ],
    "isCandidate": false,
    "candidateBadge": null,
    "candidateBanner": null,
    "title": "🚀 פלורידה – מעגל מושלם ממיאמי (טיסת לילה ישירה באל על)",
    "subtitle": "ממריאים ב-00:30 מתל אביב ב-Dreamliner, ישנים כל הלילה ונוחתים ב-06:30 בבוקר במיאמי. אפס קונקשנים!",
    "flightBox": {
      "title": "✈️ טיסות ישירות באל על למיאמי (TLV ⇄ MIA)",
      "badge": "אל על LY 17/18 • Dreamliner 787",
      "desc": "הלוך: המראה ב-00:30 בלילה (שנת לילה מלאה לילדים, נחיתה ב-06:30 בבוקר). חזור: המראה ב-21:00 בערב.",
      "timingNote": "<strong>מתי ייפתחו הטיסות להזמנה ב-Google Flights?</strong> לוחות הטיסות הסדירות של אל על לתאריכי שיא אוגוסט 2027 נפתחים כ-11 חודשים מראש — <strong>במהלך ספטמבר – אוקטובר 2026</strong> (ברגע שגם מועד טיסת החזור ב-18/08/2027 נפתח במערכות). עד אז מוצג בקישור שאין כרגע טיסות זמינות. הקישור שמור ומכויל במדויק ויופעל ברגע הפתיחה!",
      "btnText": "🔍 פתח סינון מדויק ב-Google Flights (2 מבוגרים + 2 ילדים בני 5 ו-7 • 1–18 באוגוסט 2027 • ישיר) ↗",
      "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20MIA%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop",
      "btnStyle": ""
    },
    "extraFeatureBoxes": [],
    "blocks": [
      {
        "badge": "שלב 1",
        "badgeStyle": "",
        "title": "נחיתה ישירה במיאמי והתאקלמות (2 לילות)",
        "meta": "מלון חוף במיאמי • 20 דק' משדה התעופה",
        "photoKey": "fl-miami",
        "photoBtnText": "📸 הצג תמונות ממונית Waymo והאוורגליידס",
        "days": [
          {
            "title": "יום 1: נחיתת בוקר ישירה (06:30) + נסיעה במונית Waymo",
            "tag": "חוויית Once in a Lifetime",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "איסוף מיניוואן מרווח. בוקר רגוע בבריכה. אחה\"צ מזמינים מונית Waymo ללא נהג בכלל! יושבים מאחור, ההגה מסתובב לבד ומסכי המגע מציגים את התנועה בתלת-ממד. ארוחת ערב ב-Hard Rock Cafe Bayside."
          },
          {
            "title": "יום 2 (בוקר): שייט רחפת בלבד באוורגליידס + אחה\"צ בריכה ומנוחה",
            "tag": "עוגן 1 בלבד ביום",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "יוצאים ב-09:30 לשייט רחפת אוויר (Airboat) מסעיר וקליל של 45 דק' מעל מימי הביצה לצפייה בתנינים פראיים. חוזרים ב-12:30 למלון. <strong>אחה\"צ: מנוחה טהורה!</strong> בריכת המלון, חוף הים, שייק פירות, ארוחת ערב מוקדמת ובמיטה ב-20:00. אפס עומס, הילדים רגועים ומאושרים."
          }
        ]
      },
      {
        "badge": "שלב 2",
        "badgeStyle": "",
        "title": "קוקואה ביץ' וחוף החלל (3 לילות)",
        "meta": "מלון חוף • נסיעה של שעתיים ורבע ממיאמי",
        "photoKey": "fl-ksc",
        "photoBtnText": "📸 הצג תמונות משלב החלל והדולפינים",
        "days": [
          {
            "title": "יום 3: נסיעה נופית לקוקואה ביץ' והתאקלמות בחוף",
            "tag": "שעתיים ורבע נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "נסיעה קלה צפונה לאורך החוף המזרחי למלון על החוף בקוקואה ביץ'. אחה\"צ של חוף וטיילת."
          },
          {
            "title": "יום 4: מרכז החלל קנדי (Kennedy Space Center) – בוקר",
            "tag": "20 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "מעבורת החלל אטלנטיס, רקטת סטורן 5, מתחם Planet Play המקורה והממוזג (להיט לגיל 5 ו-7). חזרה למלון ב-15:00."
          },
          {
            "title": "יום 5: ספארי סירות לדולפינים ופרות ים (שעות היום)",
            "tag": "25 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "שייט יום שקט ומרתק בנהר Banana River: צפייה בדולפינים שקופצים ליד הסירה ובפרות ים ענקיות (Manatees)."
          },
          {
            "title": "יום 6: יום חוף חינם בקוקואה ביץ' ומעבר לאורלנדו",
            "tag": "50 דק' מעבר",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בוקר ואחה\"צ מוקדם של שחייה בגלים ומנוחה על חוף קוקואה ביץ' המפורסם. 🚀 <strong>בונוס \"Once in a Lifetime\":</strong> בדקו את לוח שיגורי SpaceX (spacex.com) שבוע לפני המועד – אם Falcon 9 מוצת באותו יום, הרקטה נראית בבירור מחוף הים ממש ללא כל נסיעה! אם לא – יום חוף מושלם ומרגיע. בשעה 15:00: נסיעה קצרה ונינוחה של 50 דקות לווילה הפרטית באורלנדו."
          }
        ]
      },
      {
        "badge": "שלב 3",
        "badgeStyle": "",
        "title": "אורלנדו – וילה פרטית עם בריכה (8 לילות)",
        "meta": "ריזורט Reunion • נסיעות: 15–30 דק'",
        "photoKey": "fl-orlando",
        "photoBtnText": "📸 הצג תמונות מ-Volcano Bay והווילה",
        "days": [
          {
            "title": "יום 7: יום בריכה ומנוחה + קניות ב-Target",
            "tag": "10 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "התרעננות בבריכה הפרטית, קניות ב-Target, ארוחת ערב מוקדמת (18:00) ב-Cheesecake Factory (קניון Millenia)."
          },
          {
            "title": "יום 8: פארק המים Volcano Bay (יוניברסל)",
            "tag": "20 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "פארק המים היפה בעולם: מגיעים בפתיחה (09:00), נהר אבובים וחוף חולי סביב הר געש ענק. חזרה ב-15:00 למנוחה."
          },
          {
            "title": "יום 9: יום רגוע בווילה + מתחם Disney Springs",
            "tag": "15 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בריכה בבוקר. אחה\"צ שיטוט בין חנויות לגו הענקיות ומופעי רחוב צבעוניים."
          },
          {
            "title": "יום 10: דיסני Magic Kingdom – יום קסם עד 18:30",
            "tag": "25 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "פיטר פן, רכבת שבעת הגמדים ומצעד הדמויות. יוצאים מוקדם ב-18:30 לפני עומסי הלילה – במיטה מוקדם!"
          },
          {
            "title": "יום 11: 🏡 יום מנוחה מוחלטת בווילה הפרטית",
            "tag": "0 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "background: #f0fdf4; border-color: #bbf7d0;",
            "desc": "<strong>אפס תוכנית – ביודעין ובכוונה!</strong> בריכה פרטית כל היום ללא קצבת זמן. הורים שותים קפה בנינוחות ברחבה, הילדים שוחים ומשחקים בחצר. ארוחת ערב ביתית (BBQ) ובמיטה ב-20:00. מגיעים לפני Animal Kingdom עם טנק מלא!"
          },
          {
            "title": "יום 12: מעיינות Wekiwa Springs State Park – טבע מרענן",
            "tag": "35 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "שחייה במעיינות טבעיים של מים מתוקים וצלולים לחלוטין (22°C קבוע) בלב יער ירוק ומוצל. שביל הליכה קצר ומוצל לאורך הנהר, קנואה/קיאק בשכירות שעתית. נינוח, מרגיע, ולא ״אטרקציה״ מתישה!"
          },
          {
            "title": "יום 13: דיסני Animal Kingdom – ספארי ג'יפים",
            "tag": "20 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "ספארי ג'יפים בין אריות, פילים וג'ירפות, עולם פנדורה הקסום ומופע מלך האריות המרהיב באולם ממוזג. <strong>יוצאים ב-15:00 – לא נשארים לחשיכה!</strong>"
          },
          {
            "title": "יום 14: בריכה + קניות אחרונות ב-Orlando Premium Outlets",
            "tag": "15 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בוקר אחרון בבריכה הפרטית. אחה\"צ: קפיצה קלה ל-Vineland Premium Outlets (מותגים ב-30–70% הנחה) – שתיים-שלוש חנויות ממוקדות, לא קניות מרתון. ארוחת ערב מוקדמת ואריזה רגועה בבית. <em>אופציה: להחליף ב-Legoland Florida (45 דק') לילדים שרוצים עוד פארק אחד.</em>"
          }
        ]
      },
      {
        "badge": "שלב 4",
        "badgeStyle": "",
        "title": "חזרה למיאמי וטיסה ישירה הביתה (3 לילות)",
        "meta": "מלון חוף • טיסת לילה ישירה של אל על (LY 18)",
        "photoKey": null,
        "photoBtnText": null,
        "days": [
          {
            "title": "יום 15: נסיעה דרומה למיאמי (I-95 / Florida Turnpike)",
            "tag": "3.5 שעות נהיגה נינוחה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "יוצאים בבוקר ב-09:00, נוסעים דרומה לאורך I-95 הציורית. מגיעים למיאמי בשעות הצהריים. הילדים ישנים ברכב. צהריים במלון, אחה\"צ של חוף ים ובריכה – מנוחה לפני הטיסה."
          },
          {
            "title": "יום 16: מוזיאון המדע והאקווריום Frost Science (ממוזג וקליל)",
            "tag": "15 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בבוקר: ביקור רגוע וממוזג במוזיאון Frost (אקווריום ה-Oculus העגול הענק עם כרישים וחתולי ים מעל הראש ומתחמי מדע לילדים). אחה\"צ: מנוחה בחוף או שופינג נינוח במחירי אאוטלט."
          },
          {
            "title": "ימים 17–18: טיסת לילה ישירה באל על (LY 18) לתל אביב",
            "tag": "המראה ב-21:00",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "עולים לטיסה הישירה של אל על בדרימליינר ב-21:00 בערב. הילדים נרדמים מיד, ישנים כל הלילה ונוחתים בארץ אחה\"צ ביום 18!"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-ny-pa",
    "icon": "🏙️",
    "name": "ארה\"ב (ניו יורק ופנסילבניה)",
    "shortName": "ארה\"ב (ניו יורק)",
    "sub": "מנהטן, קלאהרי, אגמים וטבע",
    "costBadge": "~50,000 ₪",
    "flightTag": "✈️ ישיר לילה לניו יורק",
    "desc": "טיסת לילה ישירה לניו יורק (JFK/EWR), 3 ימים במנהטן ללא רכב, 4 לילות בריזורט Kalahari (פארק המים המקורה הגדול בצפון-מזרח ארה\"ב כלול במחיר!), עולם השוקולד של הרשי ואגמי Adirondacks.",
    "tags": [
      {
        "text": "~50,000 ₪",
        "cls": "price-tag"
      },
      {
        "text": "✈️ ישיר לילה לניו יורק",
        "cls": "flight-tag"
      },
      {
        "text": "ריזורט Kalahari ענק",
        "cls": ""
      },
      {
        "text": "שילוב עיר, טבע ומים",
        "cls": ""
      }
    ],
    "isCandidate": false,
    "candidateBadge": null,
    "candidateBanner": null,
    "title": "🏙️ ארה\"ב – מסע רב-מדינתי (טיסת לילה ישירה לניו יורק)",
    "subtitle": "ממריאים בלילה ל-JFK או EWR (אמריקן איירליינס / אל על בדרימליינר), ישנים במטוס ומתחילים במנהטן ללא ג'ט-לג קשה!",
    "flightBox": {
      "title": "✈️ טיסות ישירות לניו יורק (TLV ⇄ JFK / EWR)",
      "badge": "אמריקן / אל על / יונייטד • טיסות לילה ישירות",
      "desc": "המראה בחצות (00:30), הילדים ישנים כל הטיסה (8–9 שעות) ונוחתים ב-05:30 בבוקר במנהטן רעננים וללא שום קונקשן.",
      "timingNote": "<strong>מתי ייפתחו הטיסות להזמנה ב-Google Flights?</strong> קווי הטיסות הסדירות לארה\"ב (אל על, יונייטד, אמריקן) נפתחים להזמנה 330–355 ימים מראש — <strong>במהלך ספטמבר – אוקטובר 2026</strong> (עם פתיחת טיסת החזור ב-18/08/2027). עד אז הקישורים מציגים שלא נמצאו טיסות. הקישורים שמורים ומכוילים בדיוק מלא ויופעלו ברגע הפתיחה!",
      "btnText": "🔍 פתח חיפוש ל-JFK ב-Google Flights (2 מבוגרים + 2 ילדים בני 5 ו-7 • 1–18 באוגוסט 2027 • ישיר) ↗",
      "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20JFK%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop",
      "btnStyle": "",
      "secondaryBtn": {
        "btnText": "🔍 פתח חיפוש ל-EWR ב-Google Flights (2 מבוגרים + 2 ילדים בני 5 ו-7 • 1–18 באוגוסט 2027 • ישיר) ↗",
        "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20EWR%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop",
        "btnStyle": "background: #0284c7;"
      }
    },
    "extraFeatureBoxes": [],
    "blocks": [
      {
        "badge": "מוקד 1",
        "badgeStyle": "",
        "title": "מנהטן, ניו יורק (3 לילות – ללא רכב)",
        "meta": "מלון במידטאון • ימים קלילים",
        "photoKey": "ny-manhattan",
        "photoBtnText": "📸 הצג תמונות ממנהטן וסנטרל פארק",
        "days": [
          {
            "title": "יום 1: נחיתת בוקר ישירה (05:30) והגעה למלון",
            "tag": "45 דק' מונית",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "אחרי שנת לילה במטוס. התרעננות במלון, שיטוט רגלי קצר ראשון בטיימס סקוור המוארת."
          },
          {
            "title": "יום 2: סנטרל פארק (סירות באגם + גן חיות) + Hard Rock Cafe",
            "tag": "עוגן 1 בלבד ביום",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "שייט סירות משוטים באגם, גן החיות הקומפקטי והאהוב של סנטרל פארק, פיקניק וגני שעשועים מוצלים. אחה\"צ מנוחה במלון וארוחת ערב מוקדמת ב-Hard Rock Cafe Times Square ב-17:30."
          },
          {
            "title": "יום 3: מוזיאון הטבע AMNH (שלד הטי-רקס) + חנות הצעצועים FAO Schwarz",
            "tag": "עוגן 1 בלבד ביום",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בוקר ממוזג ומרתק במוזיאון הטבע האמריקאי (אולם הדינוזאורים והלווייתן הכחול). בצהריים קפיצה קלה לחנות הצעצועים FAO Schwarz לפסנתר הרצפה הענק, ואחה\"צ מנוחה נינוחה."
          },
          {
            "title": "יום 4: איסוף רכב ונסיעה לריזורט Kalahari בפנסילבניה",
            "tag": "שעה ו-45 דק' מעבר",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "איסוף SUV מרווח במנהטן בשעה 10:30, נסיעה ירוקה וקלה מערבה להרי הפוקונוס בפנסילבניה."
          }
        ]
      },
      {
        "badge": "מוקד 2",
        "badgeStyle": "",
        "title": "פנסילבניה – ריזורט פארק המים Kalahari (4 לילות)",
        "meta": "פארק המים המקורה הגדול בארה\"ב כלול במחיר!",
        "photoKey": "ny-kalahari",
        "photoBtnText": "📸 הצג תמונות מ-Kalahari ועולם השוקולד",
        "days": [
          {
            "title": "יום 5: יום שלם ב-Kalahari Indoor Waterpark",
            "tag": "0 דק' (בתוך המלון!)",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "20,000 מ\"ר ממוזגים של עשרות מגלשות מים ענקיות, בריכות גלים, נהרות אבובים ופארק חבלים פנימי."
          },
          {
            "title": "יום 6: עולם השוקולד של הרשי (Hershey's Chocolate World)",
            "tag": "שעה ורבע נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "רכבת אינטראקטיבית בתוך מפעל השוקולד, סדנה ליצירת חפיסת שוקולד מותאמת אישית עם תמונת הילדים."
          },
          {
            "title": "יום 7: מפלי Bushkill Falls (\"הניאגרה של פנסילבניה\")",
            "tag": "35 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "שבילי עץ וגשרונים תלויים בין 8 מפלים שוצפים ביער – הליכה קלה ומוצלת של שעה."
          },
          {
            "title": "יום 8: מעבר לעמק ההדסון והרי הקטסקילס",
            "tag": "שעה ו-20 דק' מעבר",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "נסיעה קלה צפון-מזרחה, התמקמות בבית כפרי מרווח עם חצר ומנגל באזור New Paltz."
          }
        ]
      },
      {
        "badge": "מוקדים 3 ו-4",
        "badgeStyle": "",
        "title": "עמק ההדסון, קטסקילס ואגם לייק ג'ורג' (9 לילות)",
        "meta": "טבע, אגמים, קטיף וספינות קיטור",
        "photoKey": "ny-nature",
        "photoBtnText": "📸 הצג תמונות משמורת Minnewaska ולייק ג'ורג'",
        "days": [
          {
            "title": "ימים 9–10: שמורת Minnewaska וחוות Kelder's Farm",
            "tag": "20 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "שבילים מישוריים סביב אגם צלול ומפלי Awosting, קטיף פירות יער עצמאי וכריות קפיצה בחווה."
          },
          {
            "title": "יום 11: גשר ההדסון התלוי (Walkway Over the Hudson)",
            "tag": "25 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "גשר הולכי הרגל הארוך בעולם (2.2 ק\"מ) מעל נהר ההדסון עם נוף פנורמי מדהים לשני הצדדים. בצד המזרחי: גן שעשועים קטן ואזור פיקניק מוצל. חזרה לבית הכפרי ב-14:00 לבריכה ומנוחה."
          },
          {
            "title": "יום 12: קניות ב-Woodbury Common Premium Outlets",
            "tag": "40 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "340 חנויות מותגים במחירי אאוטלט (ממוזג לחלוטין). הילדים: פינת משחקים מקורה בתוך הקניון. ארוחת ערב מוקדמת ב-Cheesecake Factory הסמוכה (עד 18:00) ובמיטה ב-20:00."
          },
          {
            "title": "יום 13: מעבר לאגם לייק ג'ורג' + ספינת הקיטור Minne-Ha-Ha",
            "tag": "שעה ו-35 דק' מעבר",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "נסיעה נינוחה צפונה לאגם הנסיכותי. אחה\"צ מוקדם: שייט בספינת הקיטור האותנטית עם גלגל המשוטים האדום ומוזיקת עוגב חיה – חוויה שנשארת. ארוחת ערב מוקדמת ב-17:30 בטיילת האגם ובמיטה ב-20:00."
          },
          {
            "title": "יום 14: Six Flags Great Escape – פארק שעשועים (עוגן)",
            "tag": "15 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "פארק שעשועים אזורי מהנה עם רכבות הרים, אטרקציות מים וגלגל ענק – מתאים בדיוק לבני 5 ו-7 ללא תורים של פארק מטרופוליטני. <strong>יוצאים ב-16:00 – לא נשארים לרכבות הלילה!</strong>"
          },
          {
            "title": "יום 15: יום חוף חינם באגם לייק ג'ורג'",
            "tag": "5 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "שחייה בחופים החוליים הלבנים של האגם (מים מתוקים וצלולים לחלוטין!), קיאקים/SUP בשכירות שעתית, גלידה ב-Stewarts המיתולוגית. יום בלי תוכנית – רק מים, שמש ואוויר נקי."
          },
          {
            "title": "יום 16: נסיעה רגועה חזרה לניו יורק",
            "tag": "3 שעות ל-JFK / EWR",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "יוצאים בבוקר ב-10:00, מגיעים לניו יורק בשעות הצהריים. מחזירים את הרכב. ארוחת ערב אחרונה בעיר (פיצה ניו יורקית אמיתית?) לפני כידת הטיסה."
          },
          {
            "title": "ימים 17–18: טיסת לילה ישירה מניו יורק לתל אביב",
            "tag": "שעתיים ורבע לשדה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "המראה ב-23:00 בלילה, הילדים ישנים במטוס, נחיתה בתל אביב אחה\"צ ביום 18."
          }
        ]
      }
    ]
  },
  {
    "id": "tab-austria",
    "icon": "🇦🇹",
    "name": "אוסטריה והאלפים",
    "shortName": "אוסטריה",
    "sub": "2 בסיסים, פארק מים ענק, אגמים וקרחונים",
    "costBadge": "~37,000 ₪",
    "flightTag": "✈️ ישיר למינכן (3.5 שעות)",
    "desc": "טיסה ישירה קצרה למינכן (3.5 שעות בלבד), אפס ג'ט-לג, רכב סטיישן מרווח, שני בסיסים קבועים (פלאכאו וצל-אם-זה), מערת הקרח הגדולה בעולם וסיום מרהיב בפארק המים Erding (הגדול בעולם).",
    "tags": [
      {
        "text": "~37,000 ₪",
        "cls": "price-tag"
      },
      {
        "text": "✈️ ישיר למינכן (3.5 שעות)",
        "cls": "flight-tag"
      },
      {
        "text": "אפס ג'ט לג",
        "cls": ""
      },
      {
        "text": "פארק מים Erding ומערת קרח",
        "cls": ""
      }
    ],
    "isCandidate": false,
    "candidateBadge": null,
    "candidateBanner": null,
    "title": "🇦🇹 אוסטריה – \"2 בסיסים אלפיניים + פארק המים הגדול בעולם\"",
    "subtitle": "טיסה ישירה קצרה של 3.5 שעות למינכן, אפס ג'ט-לג, רכב שכור מרווח ו-2 בסיסים נוחים לחקירה בטוחה ושקטה של האלפים.",
    "flightBox": {
      "title": "✈️ טיסות ישירות למינכן / וינה (TLV ⇄ MUC / VIE)",
      "badge": "לופטהנזה / אל על / אוסטריאן • 3.5–4 שעות",
      "desc": "הטיסה הקצרה ביותר (3.5 שעות בלבד), אפס ג'ט-לג, נחיתה נינוחה בבוקר ואיסוף רכב ישירות בשדה.",
      "timingNote": "<strong>מתי ייפתחו הטיסות להזמנה ב-Google Flights?</strong> לוחות טיסות הקיץ של לופטהנזה, אל על ואוסטריאן נפתחים רשמית <strong>במהלך ספטמבר – אוקטובר 2026</strong> (עם עדכון לוחות טיסות הקיץ של איגוד חברות התעופה IATA). עד אז הקישורים מציגים שאין עדיין טיסות. הקישורים מכוילים בדיוק מלא ויופעלו ברגע הפתיחה!",
      "btnText": "🔍 פתח חיפוש למינכן ב-Google Flights (2 מבוגרים + 2 ילדים בני 5 ו-7 • 1–18 באוגוסט 2027 • ישיר) ↗",
      "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20MUC%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop",
      "btnStyle": "",
      "secondaryBtn": {
        "btnText": "🔍 פתח חיפוש לוינה ב-Google Flights (2 מבוגרים + 2 ילדים בני 5 ו-7 • 1–18 באוגוסט 2027 • ישיר) ↗",
        "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20VIE%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop",
        "btnStyle": "background: #0284c7;"
      }
    },
    "extraFeatureBoxes": [
      "<!-- Kinderhotel / Dachsteinkönig Luxury Upgrade Option -->\n        <div class=\"kinderhotel-card\">\n          <div class=\"kinderhotel-header\">\n            <div style=\"display: flex; align-items: center; gap: 10px; flex-wrap: wrap;\">\n              <span class=\"kinderhotel-badge\">👑 שדרוג מלכותי אופציונלי</span>\n              <h4 class=\"kinderhotel-title\">מלון הדגל: Dachsteinkönig – Familux Resort ורשת ה-Kinderhotels</h4>\n            </div>\n            <button class=\"photo-btn\" style=\"background: #c026d3;\" onclick=\"openPhotoModal('at-dachstein')\">📸 תמונות מאזור Dachsteinkönig</button>\n          </div>\n\n          <p style=\"color: #4a044e; font-size: 0.95rem; line-height: 1.6; margin-bottom: 14px;\">\n            מלון <strong>Dachsteinkönig (גוסאו am Dachstein, כ-45 דקות מדרום לזלצבורג)</strong> נחשב לריזורט המשפחות הטוב והמפנק ביותר באירופה (דירוג 5 כוכבים סופריור). הרעיון הוא חופשת חלומות שבה <strong>גם ההורים וגם הילדים נחים ומתפנקים ב-100%</strong>:\n          </p>\n\n          <div class=\"kinderhotel-grid\">\n            <div class=\"kinderhotel-feature\">\n              <strong>🍽️ אולטרה הכל-כלול גורמה (All-Inclusive Premium)</strong>\n              <span>מזנוני שף עשירים בבוקר ובצהריים, קפה ועוגות אחה\"צ, ארוחת ערב גורמה 5 מנות להורים, מזנון ילדים ייעודי ובר שתייה/גלידות חופשי 24/7.</span>\n            </div>\n            <div class=\"kinderhotel-feature\">\n              <strong>👶 מועדוני ילדים 7 ימים בשבוע (08:30–21:00)</strong>\n              <span>צוות פדגוגי מוסמך מעסיק את הילדים (מועדון Mini לגיל 5 ומועדון Maxi לגיל 7) בסדנאות, קסמים, טיולים ותיאטרון – ההורים פנויים למנוחה ולספא!</span>\n            </div>\n            <div class=\"kinderhotel-feature\">\n              <strong>🌊 עולם מים מקורה ענק ו-2,000 מ\"ר משחקים</strong>\n              <span>מגלשת אבובים מקורה באורך 100 מטר, בריכות מחוממות (פנים וחוץ מול הנוף האלפיני), טרמפולינות, באולינג, ג'ימבורי ענק ואולם קולנוע.</span>\n            </div>\n            <div class=\"kinderhotel-feature\">\n              <strong>💆 ספא שקט להורים בלבד</strong>\n              <span>סאונות פנורמיות, בריכת אינפיניטי שקטה למבוגרים, חדרי מנוחה עם מיטות מים וטיפולי ספא מפנקים בזמן שהילדים נהנים בהשגחה מלאה.</span>\n            </div>\n          </div>\n\n          <div class=\"pricing-impact-box\">\n            <div class=\"pricing-impact-title\">\n              💵 כמה זה עולה ואיך זה משפיע על התקציב הכולל של אוסטריה?\n            </div>\n            <p style=\"font-size: 0.88rem; color: #4a044e; margin-bottom: 12px; line-height: 1.5;\">\n              <strong>מחיר חדר בשיא אוגוסט:</strong> סוויטה משפחתית (חדר שינה נפרד להורים וחדר נפרד לילדים) עולה כ-<strong>€850 – €1,050 ללילה</strong> (~$920 – $1,150) למשפחה של 4, <em>אך כוללת את כל הארוחות, השתייה, האטרקציות וההשגחה</em> (חוסך כ-$120 ליום באוכל ובפעילויות חוץ).\n            </p>\n            <div class=\"impact-scenarios\">\n              <div class=\"scenario-card\">\n                <h5>1. תכנית הבסיס (דירות אלפיניות 4★)</h5>\n                <div class=\"scenario-price\">~37,000 ₪ ($9,825)</div>\n                <div class=\"scenario-desc\">17 לילות בדירות נופש מרווחות עם מטבח ובריכה + מסעדות כפריות. החופשה הכי חסכונית.</div>\n              </div>\n              <div class=\"scenario-card recommended\">\n                <span class=\"scenario-badge\">⭐ השילוב המושלם (מומלץ בחום)</span>\n                <h5>2. \"טעימת מלוכה\" – 4 לילות דאכשטיינקוניג + 13 בדירות</h5>\n                <div class=\"scenario-price\">~46,000 ₪ ($12,200)</div>\n                <div class=\"scenario-desc\">4 לילות של שיא הפינוק ב-Dachsteinkönig + שאר הימים בדירת יוקרה באגמים. <strong>עדיין זול ב-9,000 ₪ מפלורידה!</strong></div>\n              </div>\n              <div class=\"scenario-card\">\n                <h5>3. שבוע מלא בדאכשטיינקוניג (7 לילות)</h5>\n                <div class=\"scenario-price\">~57,000 ₪ ($15,200)</div>\n                <div class=\"scenario-desc\">שבוע שלם של 0 מאמץ ואולטרה-פינוק + 10 לילות ב-Kinderhotel נוסף (כמו Post Unken) או בקתה. משתווה לפלורידה.</div>\n              </div>\n            </div>\n          </div>\n        </div>"
    ],
    "blocks": [
      {
        "badge": "בסיס 1",
        "badgeStyle": "",
        "title": "חבל זלצבורג – פלאכאו / ואגריין (8 לילות)",
        "meta": "מלון דירות 4 כוכבים עם בריכה • נסיעות: 10–35 דק'",
        "photoKey": "at-salzburg",
        "photoBtnText": "📸 הצג תמונות מרכבל Wagraini ומערת הקרח",
        "days": [
          {
            "title": "יום 1: טיסה ישירה למינכן (3.5 שעות) ונסיעה לפלאכאו",
            "tag": "שעתיים אוטוסטרדה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "טיסה קלה של בוקר, איסוף סטיישן/SUV, נסיעה בנוף הררי לדירת נופש מרווחת."
          },
          {
            "title": "יום 2: רכבל Wagraini’s Grafenberg – עולם ההרפתקאות",
            "tag": "10 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "עולים ברכבל לפסגת ההר בשעות הבוקר: פארק עץ ומים, רפסודות שמושכים בחבל מעל אגם אלפיני."
          },
          {
            "title": "יום 3: מכרות המלח בהאליין (Salzwelten)",
            "tag": "35 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "סרבלי כורים, רכבת זעירה לבטן ההר, 2 מגלשות עץ ענקיות ושייט באגם מלח תת-קרקעי."
          },
          {
            "title": "יום 4: מערת הקרח הגדולה בעולם (Eisriesenwelt)!",
            "tag": "25 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "רכבל תלול אל תוך המצוק וכניסה עם עששיות לארמון קרח תת-קרקעי עצום – חוויית Once in a Lifetime!"
          },
          {
            "title": "יום 5: פארק המים והספא Therme Amadé",
            "tag": "8 דק' מהבית!",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בריכות גלים, מגלשות מים ומים תרמיים חמימים למנוחה משפחתית מושלמת."
          },
          {
            "title": "ימים 6–8: הר הרוחות, טירת הוהנוורפן והעיר זלצבורג",
            "tag": "18–45 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "מופע עיטים ובזים במבצר עתיק, מזרקות המים המתעתעות בארמון הלברון, גני מיראבל."
          },
          {
            "title": "יום 9: מעבר קל לבסיס השני בטירול",
            "tag": "שעה ו-20 דק' מעבר",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "נסיעה קצרה ונופית לדירת נופש המשקיפה על אגם צל-אם-זה וההרים המושלגים."
          }
        ]
      },
      {
        "badge": "בסיס 2",
        "badgeStyle": "",
        "title": "חבל טירול – קפרון וצל-אם-זה (8 לילות)",
        "meta": "אגמים, קרחונים, סכרים ומפלים",
        "photoKey": "at-tyrol",
        "photoBtnText": "📸 הצג תמונות מאגם צל-אם-זה ומפלי קרימל",
        "days": [
          {
            "title": "יום 10: שייט בסירה חשמלית באגם צל-אם-זה",
            "tag": "10 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "שייט עצמאי בסירה קטנה באגם הטורקיז, רחצה בחוף מסודר עם מים צלולים ומדשאות."
          },
          {
            "title": "יום 11: הסכרים הגבוהים בקפרון (Stauseen)",
            "tag": "20 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "מעלית אלפינית פתוחה עולה אל סכרי ענק בגובה 2,000 מטר עם מי טורקיז מול קרחונים."
          },
          {
            "title": "יום 12: מפלי קרימל (Krimml Waterfalls) – הגבוהים באירופה",
            "tag": "45 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "עוצמת מים פראית בגובה 380 מטר, הליכה קלה של 15 דקות לרסס המים המרענן."
          },
          {
            "title": "יום 13: מגלשות ההרים Maisiflitzer בקפרון",
            "tag": "10 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "רכבת הרים אישית על מסילה עם ידית בלם שגולשת במהירות מטורפת בין עצי היער."
          },
          {
            "title": "ימים 14–16: קניון זיגמונד טון ודרך Grossglockner",
            "tag": "10–40 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "גשרי עץ תלויים מעל נהר טורקיז שוצף, נסיעה פנורמית מעל העננים וצפייה במרמיטות בטבע."
          },
          {
            "title": "ימים 17–18: פארק המים הגדול בעולם (Therme Erding) וטיסה",
            "tag": "שעתיים נסיעה למינכן",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "סיום חלומי: לינה במלון בתוך Therme Erding – 28 מגלשות מים ענקיות ובריכות גלים טרופיות. בבוקר 15 דק' לשדה התעופה."
          }
        ]
      }
    ]
  },
  {
    "id": "tab-korea",
    "icon": "🇰🇷",
    "name": "דרום קוריאה",
    "shortName": "דרום קוריאה",
    "sub": "סיאול, אי ג'ג'ו ופארקים",
    "costBadge": "~42,000 ₪",
    "flightTag": "✈️ ישיר לסיאול",
    "desc": "טיסה ישירה לסיאול, המדינה הבטוחה והנקייה בעולם, פארקי ענק (Lotte World ופנדות), <strong>טיפולי פנים מהמתקדמים בעולם (גם לגברים!)</strong>, לצד היערכות לאתגר האוכל לילדים.",
    "tags": [
      {
        "text": "~42,000 ₪",
        "cls": "price-tag"
      },
      {
        "text": "✈️ ישיר לסיאול",
        "cls": "flight-tag"
      },
      {
        "text": "💆 טיפולי פנים K-Beauty",
        "cls": "",
        "style": "background: #fdf4ff; border-color: #f0abfc; color: #701a75;"
      },
      {
        "text": "⚠️ אתגר אוכל לילדים (מחייב היערכות)",
        "cls": "",
        "style": "background: #fff7ed; border-color: #fdba74; color: #c2410c;"
      }
    ],
    "isCandidate": true,
    "candidateBadge": "💡 אופציה חדשה בשקילה",
    "candidateBanner": {
      "icon": "🇰🇷",
      "title": "אופציה חדשה לבחינה: דרום קוריאה – עתידנות, פארקים ואיים",
      "desc": "המדינה הבטוחה והנקייה בעולם עם אפס פשיעה. טיסה ישירה לסיאול (11.5 שעות), רכבות מהירות KTX, פארק השעשועים המקורה הגדול בעולם (Lotte World) ועולם הפנדות (Everland) – אטרקציות מדהימות לילדים בני 5 ו-7, לצד היערכות לאתגר האוכל (המטבח המקומי אינו מותאם לילדים ומחייב תכנון מראש)."
    },
    "title": "🇰🇷 דרום קוריאה – עתידנות, פארקי ענק ואיים טרופיים (טיסה ישירה לסיאול)",
    "subtitle": "נחיתה ישירה בנמל התעופה אינצ'ון (ICN), לינה במלונות וסוויטות מרווחות, תחבורה ציבורית מושלמת, אי ג'ג'ו הטרופי, לגולנד קוריאה והיערכות מוקפדת לאתגר האוכל לילדים.",
    "flightBox": {
      "title": "✈️ טיסות ישירות לסיאול (TLV ⇄ ICN)",
      "badge": "קוריאן אייר / אל על • ישיר 11.5 שעות",
      "desc": "טיסה ישירה לנמל התעופה הבינלאומי אינצ'ון (ICN) – המדורג מס' 1 בעולם ביעילות, שירות ובניקיון.",
      "timingNote": "<strong>מתי ייפתחו הטיסות להזמנה ב-Google Flights?</strong> קווי הטיסות הישירות לסיאול (קוריאן אייר ואל על) נפתחים להזמנה כ-330 יום מראש — <strong>במהלך ספטמבר – אוקטובר 2026</strong> (כאשר טיסת החזור של 18/08/2027 נפתחת). עד אז מוצגת הודעה שאין עדיין טיסות ב-Google Flights. הקישור שמור ומסונן בדיוק עבורכם ויופעל ברגע הפתיחה!",
      "btnText": "🔍 פתח חיפוש לסיאול ב-Google Flights (2 מבוגרים + 2 ילדים בני 5 ו-7 • 1–18 באוגוסט 2027 • ישיר) ↗",
      "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20ICN%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop",
      "boxStyle": "background: #fefce8; border-color: #fde047;",
      "badgeStyle": "background: #ca8a04;",
      "titleStyle": "color: #854d0e;",
      "descStyle": "color: #a16207;",
      "timingStyle": "background: rgba(255, 255, 255, 0.9); border-color: #ca8a04; color: #854d0e;",
      "btnStyle": "background: #ca8a04;"
    },
    "extraFeatureBoxes": [
      "<div style=\"background: linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%); border: 1.5px solid #d946ef; border-radius: 12px; padding: 18px 20px; margin-bottom: 18px; box-shadow: 0 4px 12px rgba(217, 70, 239, 0.08);\">\n          <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;\">\n            <div style=\"display: flex; align-items: center; gap: 10px;\">\n              <span style=\"font-size: 1.8rem;\">💆✨</span>\n              <h4 style=\"margin: 0; color: #701a75; font-size: 1.08rem; font-weight: 800;\">יתרון ענק להורים: טיפולי פנים וקליניקות K-Beauty סופר-מתקדמות (גם לגברים!)</h4>\n            </div>\n            <span style=\"background: #c026d3; color: white; padding: 3px 10px; border-radius: 20px; font-size: 0.74rem; font-weight: 700;\">מעצמת הטיפוח מס' 1 בעולם</span>\n          </div>\n          <p style=\"color: #4a044e; font-size: 0.9rem; line-height: 1.6; margin: 0 0 10px 0;\">\n            דרום קוריאה מובילה את העולם בקוסמטיקה רפואית וטיפוח עור. <strong>בסיאול (ברובעי גנגנאם, אפגוג'ונג ומיונגדונג) יש עשרות קליניקות דרמטולוגיה מהמתקדמות והמושקעות בעולם – המותאמות במיוחד גם לגברים וגם לנשים!</strong>\n          </p>\n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px;\">\n            <div style=\"background: white; border: 1px solid #f0abfc; border-radius: 8px; padding: 10px 12px; font-size: 0.83rem; color: #581c87;\">\n              <strong style=\"color: #701a75; display: block; margin-bottom: 3px;\">👨 טיפולי פנים לגברים (Men's Grooming):</strong> קליניקות ייעודיות לגברים עם טיפולי Aqua Peel לניקוי עמוק, פילינג חמצן, כיווץ נקבוביות ורענון עור ב-60–75 דקות, ללא כאב וללא אדמומיות.\n            </div>\n            <div style=\"background: white; border: 1px solid #f0abfc; border-radius: 8px; padding: 10px 12px; font-size: 0.83rem; color: #581c87;\">\n              <strong style=\"color: #701a75; display: block; margin-bottom: 3px;\">👩 טיפולי Glass Skin לגל:</strong> החדרת לחות היאלורונית עמוקה, טיפולי לייזר עדינים (Pico Toning), מסיכות LED ועיסויי פנים ברמה של מלונות 7 כוכבים.\n            </div>\n            <div style=\"background: white; border: 1px solid #f0abfc; border-radius: 8px; padding: 10px 12px; font-size: 0.83rem; color: #581c87;\">\n              <strong style=\"color: #701a75; display: block; margin-bottom: 3px;\">💰 מחיר ושירות:</strong> טיפולים ברמה עולמית עולים בקוריאה כשליש מהמחיר בישראל או בארה\"ב, עם שירות סטרילי ויעיל ברמה רפואית. פינוק זוגי מושלם!\n            </div>\n          </div>\n        </div>\n\n        <!-- Feature 2: Food Challenge & Solutions Box (Gal's Observation) -->",
      "<div style=\"background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); border: 1.5px solid #f97316; border-radius: 12px; padding: 18px 20px; margin-bottom: 22px; box-shadow: 0 4px 12px rgba(249, 115, 22, 0.08);\">\n          <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;\">\n            <div style=\"display: flex; align-items: center; gap: 10px;\">\n              <span style=\"font-size: 1.8rem;\">🍜👶</span>\n              <h4 style=\"margin: 0; color: #9a3412; font-size: 1.08rem; font-weight: 800;\">האתגר של גל: אוכל בקוריאה לילדים בני 5 ו-7 – המציאות והפתרונות</h4>\n            </div>\n            <span style=\"background: #ea580c; color: white; padding: 3px 10px; border-radius: 20px; font-size: 0.74rem; font-weight: 700;\">דגש קריטי של גל ✓</span>\n          </div>\n          <p style=\"color: #7c2d12; font-size: 0.9rem; line-height: 1.6; margin: 0 0 10px 0;\">\n            <strong>גל צודקת ב-100%!</strong> המטבח הקוריאני המסורתי עשיר ברטבי צ'ילי חריפים (Gochujang), שום דומיננטי, קימצ'י מותסס וריחות ים עזים — שמרבית הילדים הישראלים בגילאי 5 ו-7 יסרבו לטעום.\n          </p>\n          <div style=\"background: #ffffff; border: 1px solid #fdba74; border-radius: 10px; padding: 12px 14px;\">\n            <strong style=\"color: #9a3412; font-size: 0.88rem; display: block; margin-bottom: 6px;\">💡 כך פותרים את זה בקלות רבה (בדוק ומנוסה עם ילדים):</strong>\n            <ul style=\"margin: 0; padding-right: 20px; color: #7c2d12; font-size: 0.84rem; line-height: 1.6;\">\n              <li><strong>מנת הדגל של כל הילדים – דונקאצו (Tonkatsu / 돈까스):</strong> שניצל ענק, פריך ומוזהב (בדיוק כמו שניצל ביתי!), מוגש עם אורז לבן עדין וצ'יפס. נמצא כמעט בכל מסעדה בקוריאה והילדים טורפים את זה!</li>\n              <li><strong>מרק קלגוקסו עדין (Kalguksu - 칼국수):</strong> מרק אטריות עוף או בקר צח וטעים, עדין לחלוטין וללא שום חריפות (מבקשים \"Never Spicy\").</li>\n              <li><strong>רשתות מאפיות פריזאיות בכל 100 מטר:</strong> רשתות ענק כמו Paris Baguette ו-Tous Les Jours נמצאות בכל פינת רחוב — קרואסונים טריים, טוסטים, כריכי גבינה צהובה, לחמניות רכות, מאפים מתוקים ויוגורטים.</li>\n              <li><strong>מטבח מערבי מוכר וזמין:</strong> בכל קניון, פארק שעשועים ומתחם בילוי יש סניפי Shake Shack, McDonald's, מסעדות פיצה מעולות ואיטלקיות (פסטה ברוטב עגבניות או שמנת).</li>\n              <li><strong>סופרמרקטים ענקיים (E-Mart / Lotte Mart):</strong> שפע פירות טריים וטעימים, חטיפים מוכרים, יוגורטים, מעדנים ומוצרי חלב.</li>\n            </ul>\n          </div>\n        </div>"
    ],
    "blocks": [
      {
        "badge": "שלב 1",
        "badgeStyle": "background: #ca8a04;",
        "title": "סיאול העתידנית – פארקים מקורים, פנדות ורובוטים (6 לילות)",
        "meta": "מלון משפחתי 5★ בסיאול • תחבורה מעולה",
        "photoKey": "kr-seoul",
        "photoBtnText": "📸 הצג תמונות מ-Lotte World ועולם הפנדות",
        "days": [
          {
            "title": "יום 1: נחיתת בוקר ישירה בנמל אינצ'ון (ICN) + התאקלמות",
            "tag": "נמל התעופה הטוב בעולם",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "נחיתה ישירה ונוחה. רכבת AREX ישירות למלון במרכז העיר. צהריים רגועים ומנוחה בבריכת המלון. אחה\"צ: טיול קליל לאורך נחל צ'אונג-גה-צ'ון (Cheonggyecheon) המואר והקריר במרכז העיר."
          },
          {
            "title": "יום 2: פארק השעשועים המקורה Lotte World (ממוזג לגמרי)",
            "tag": "עוגן 1 בלבד ביום",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "פארק השעשועים המקורה הגדול בעולם! מתקנים קסומים, טירת אגדות, בלונים פורחים תלויים ורכבות עדינות המתאימות בדיוק לגילאי 5 ו-7. ממוזג לחלוטין וללא שמש ישירה. אחה\"צ חוזרים למנוחה ובריכה. במיטה ב-20:00."
          },
          {
            "title": "יום 3: ארמון Gyeongbokgung + בית קפה רובוטי עתידני",
            "tag": "15 דק' במטרו",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בבוקר: לבישת בגדי Hanbok מסורתיים לילדים (חוויה צילומית מקסימה) וסיור רגוע ברחבות הארמון המלכותי. בצהריים: ביקור בבית קפה שבו רובוטים מכינים ומגישים שייקים וגלידות – הילדים מרותקים!"
          },
          {
            "title": "יום 4: פארק הנושא Everland & Panda World (צפייה בפנדות ענק)",
            "tag": "עוגן 1 בלבד ביום",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "ה\"דיסנילנד\" של דרום קוריאה! ביקור בוקר מרגש במתחם הפנדות (Panda World) – צפייה מקרוב בגורי פנדה ענקיים מכרסמים במבוק. נסיעת ספארי בתוך רכב ייעודי לצפייה בדובים וחיות בר."
          },
          {
            "title": "יום 5: מוזיאון הילדים והמדע + אחה\"צ K-Beauty מפנק להורים",
            "tag": "פינוק זוגי מתקדם",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בבוקר: ניסויים מדעיים אינטראקטיביים, מנהרות לייזר ודינוזאורים במוזיאון הילדים, לצד רחוב הצעצועים של דונגדמון. אחה\"צ: מנוחה רגועה במלון ופינוק להורים – <strong>טיפול פנים קוריאני מתקדם ומושקע (Aqua Peel ועיסוי פנים מותאם גם לגברים וגם לנשים) בקליניקה מוסמכת בגנגנאם!</strong> ארוחת ערב: שניצל דונקאצו פריך ומושלם לילדים."
          },
          {
            "title": "יום 6: ספריית הענק Starfield COEX + האקווריום המלכותי",
            "tag": "הכל במתחם אחד ממוזג",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "ביקור בקניון התת-קרקעי המפורסם: ספריית COEX עם קירות ספרים בגובה 13 מטר, ואקווריום ענק עם כרישים, פינגווינים ומנהרות מים תת-ימיות."
          }
        ]
      },
      {
        "badge": "שלב 2",
        "badgeStyle": "background: #0284c7;",
        "title": "האי הטרופי ג'ג'ו (Jeju Island) – טבע, מבוכים וחופים (6 לילות)",
        "meta": "טיסת פנים קצרה (50 דק') • ריזורט מפנק על הים • רכב שכור",
        "photoKey": "kr-jeju",
        "photoBtnText": "📸 הצג תמונות מהאי ג'ג'ו והר הגעש",
        "days": [
          {
            "title": "יום 7: טיסה קצרה לאי ג'ג'ו והתמקמות בריזורט חוף",
            "tag": "50 דק' טיסה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "טיסת פנים קצרה מנמל Gimpo ישירות לאי ג'ג'ו (\"הוואי של אסיה\"). איסוף רכב שכור מרווח. נסיעה לריזורט משפחתי עם בריכות מים ונוף לים. יום התאקלמות, רחצה ומנוחה."
          },
          {
            "title": "יום 8: מבוך הצמחים Gimnyeong Maze + חוף הטורקיז Hamdeok",
            "tag": "25 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "בבוקר: הרפתקה משפחתית במבוך הצמחים הירוק (הילדים מנווטים עד לצלצול בפעמון בראש הגשר). אחה\"צ: רחצה רגועה בחוף Hamdeok עם מי טורקיז רדודים וחמימים וחול לבן ורך."
          },
          {
            "title": "יום 9: פארק המים והשעשועים Shinhwa World",
            "tag": "עוגן 1 בלבד ביום",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "מתחם מים ושעשועים ענק: מגלשות מים עדינות, בריכות גלים מותאמות לילדים קטנים ומתחם אנימציה צבעוני. מנוחה מוחלטת לאחה\"צ."
          },
          {
            "title": "יום 10: מוזיאון הדובי טדי (Teddy Bear Museum) ועולם התה Osulloc",
            "tag": "20 דק' נסיעה",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "מוזיאון ענק המציג סצנות היסטוריות עם אלפי דובי טדי מונפשים. ביקור במטעי התה הירוק השלווים וגלידת תה ירוק עדינה."
          },
          {
            "title": "יום 11: שייט בסירות שקופות במפרץ הוואיודו (Hado Kayak)",
            "tag": "מים צלולים כזכוכית",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "שייט רגוע בסירות קייאק עם תחתית שקופה לחלוטין – הילדים צופים בדגים ובצדפות שוחות מתחת לרגליים במים רדודים ושקטים."
          },
          {
            "title": "יום 12: תצפית הר הגעש הכבוי Seongsan Ilchulbong + מנוחה",
            "tag": "נוף פנורמי מרהיב",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "טיילת עץ קלה ומונגשת המשקיפה על המכתש הירוק הייחודי הנושק לים. אחה\"צ רגוע בבריכת הריזורט ואריזה לקראת חזרה ליבשת."
          }
        ]
      },
      {
        "badge": "שלב 3",
        "badgeStyle": "background: #16a34a;",
        "title": "לגולנד קוריאה ורכבת הקליע KTX (5 לילות)",
        "meta": "רכבת קליע ב-300 קמ\"ש • פארק לגולנד ייעודי",
        "photoKey": null,
        "photoBtnText": null,
        "days": [
          {
            "title": "יום 13: טיסה חזרה לסיאול + נסיעה ברכבת הקליע KTX (300 קמ\"ש)",
            "tag": "חוויית רכבת עתידנית",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "טיסה קצרה חזרה לסיאול. עולים לרכבת הקליע KTX – נסיעה חלקה, שקטה ומהירה במיוחד. הילדים מרותקים לנופים החולפים בחלונות במהירות 300 קמ\"ש."
          },
          {
            "title": "ימים 14–15: פארק לגולנד קוריאה (Legoland Korea Resort)",
            "tag": "מותאם בול לגילאי 5 ו-7",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "פארק הלגולנד החדיש ביותר בעולם, ממוקם על אי שליו. מתקנים צבעוניים, בית ספר לנהיגה בלגו, מתחמי נינג'גו ומגלשות מים עדינות. שהייה במלון לגולנד עם חדרים מעוצבים לפי נושאים."
          },
          {
            "title": "יום 16: שופינג מתנות משפחתי ומוזיאון האשליות Trickeye",
            "tag": "יום עירוני כיפי",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "קניות של מזכרות, חטיפים קוריאניים מיוחדים וצעצועים. ביקור במוזיאון תלת-ממד אינטראקטיבי שבו הילדים \"נכנסים\" לתוך הציורים לצילומים משעשעים."
          },
          {
            "title": "ימים 17–18: טיסה ישירה מסיאול (ICN) חזרה לתל אביב",
            "tag": "11.5 שעות ישיר",
            "tagClass": "",
            "cardClass": "",
            "cardStyle": "",
            "desc": "אריזה נינוחה, נסיעה קלה לנמל התעופה אינצ'ון (ICN). עלייה לטיסה הישירה הביתה. נחיתה בישראל ביום 18 מלאי חוויות וזיכרונות בלתי נשכחים!"
          }
        ]
      }
    ]
  }
],

  costsTable: {
  "headers": [
    {
      "name": "קטגוריית הוצאה"
    },
    {
      "icon": "🚀",
      "name": "פלורידה (טיסה ישירה מיאמי)",
      "tabId": "tab-florida"
    },
    {
      "icon": "🏙️",
      "name": "ארה\"ב (טיסה ישירה ניו יורק)",
      "tabId": "tab-ny-pa"
    },
    {
      "icon": "🇦🇹",
      "name": "אוסטריה (טיסה ישירה מינכן)",
      "tabId": "tab-austria"
    },
    {
      "icon": "🇰🇷",
      "name": "דרום קוריאה (טיסה ישירה סיאול)",
      "tabId": "tab-korea",
      "isCandidate": true
    }
  ],
  "rows": [
    {
      "category": "טיסות ישירות (4 נפשות)",
      "catSub": "2 מבוגרים + 2 ילדים • 1–18 באוגוסט",
      "cols": [
        {
          "text": "<strong>$5,800</strong> (אל על Dreamliner ישיר, ~$1,450 לאדם)",
          "linkText": "🔍 פתח חיפוש טיסה לפלורידה ↗",
          "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20MIA%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop"
        },
        {
          "text": "<strong>$5,400</strong> (אמריקן/אל על ישיר, ~$1,350 לאדם)",
          "linkText": "🔍 פתח חיפוש טיסה לניו יורק ↗",
          "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20JFK%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop"
        },
        {
          "text": "<strong>$3,000</strong> (טיסה ישירה 3.5 שעות, ~$750 לאדם)",
          "linkText": "🔍 פתח חיפוש טיסה לאוסטריה ↗",
          "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20MUC%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop"
        },
        {
          "text": "<strong>$4,800</strong> (טיסה ישירה לסיאול, ~$1,200 לאדם)",
          "linkText": "🔍 פתח חיפוש טיסה לקוריאה ↗",
          "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20ICN%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop",
          "linkStyle": "color: #854d0e;"
        }
      ]
    },
    {
      "category": "לינה (17 לילות)",
      "cols": [
        {
          "text": "<strong>$4,100</strong> (וילה בריזורט באורלנדו + מלונות חוף)"
        },
        {
          "text": "<strong>$5,280</strong> (מנהטן + ריזורט Kalahari + בקתות)"
        },
        {
          "text": "<strong>$4,240</strong> (מלונות דירות 4 כוכבים + Erding)"
        },
        {
          "text": "<strong>$3,600</strong> (מלונות משפחתיים 4-5★ בסיאול וריזורט בג'ג'ו)"
        }
      ]
    },
    {
      "category": "השכרת רכב ותחבורה",
      "cols": [
        {
          "text": "<strong>$1,650</strong> (מיניוואן ל-17 יום, ביטוח מלא)"
        },
        {
          "text": "<strong>$1,350</strong> (SUV ל-14 יום, ללא מנהטן)"
        },
        {
          "text": "<strong>$1,450</strong> (סטיישן/SUV ל-17 יום, ביטוח מלא)"
        },
        {
          "text": "<strong>$1,100</strong> (רכבות מהירות KTX + טיסות פנים לג'ג'ו + רכב שכור)"
        }
      ]
    },
    {
      "category": "דלק, כבישי אגרה וחניות",
      "cols": [
        {
          "text": "<strong>$450</strong> (SunPass, חניות)"
        },
        {
          "text": "<strong>$400</strong> (E-ZPass, דלק)"
        },
        {
          "text": "<strong>$300</strong> (מדבקת אוטוסטרדה, דלק)"
        },
        {
          "text": "<strong>$150</strong> (רכבות KTX בעיר, רכב רק בג'ג'ו)"
        }
      ]
    },
    {
      "category": "כרטיסים ואטרקציות",
      "cols": [
        {
          "text": "<strong>$2,650</strong> (דיסני, Volcano Bay, חלל, דולפינים, Waymo)"
        },
        {
          "text": "<strong>$750</strong> (Kalahari כלול במלון! הרשי, מוזיאונים)"
        },
        {
          "text": "<strong>$835</strong> (כרטיס זלצבורגלנד, מערת קרח, Erding)"
        },
        {
          "text": "<strong>$1,400</strong> (Lotte World, Everland ופנדות, לגולנד, אקווריום)"
        }
      ]
    },
    {
      "isTotalUSD": true,
      "category": "סה\"כ עלות בסיס ($)",
      "cols": [
        {
          "text": "$14,650"
        },
        {
          "text": "$13,180"
        },
        {
          "text": "$9,825"
        },
        {
          "text": "$11,050",
          "style": "color: #0f172a; font-weight: 800;"
        }
      ]
    },
    {
      "isTotalILS": true,
      "category": "סה\"כ בשקלים (₪)",
      "cols": [
        {
          "text": "~55,000 ₪"
        },
        {
          "text": "~50,000 ₪"
        },
        {
          "text": "~37,000 ₪"
        },
        {
          "text": "~42,000 ₪",
          "style": "color: #b45309; font-weight: 800;"
        }
      ]
    },
    {
      "isSpecial": true,
      "rowStyle": "background: #fdf4ff; border-top: 2px dashed #d946ef;",
      "category": "👑 אופציה: אוסטריה + 4 לילות בדאכשטיינקוניג",
      "cols": [
        {
          "text": "-",
          "style": "color: var(--text-muted); font-size: 0.85rem;"
        },
        {
          "text": "-",
          "style": "color: var(--text-muted); font-size: 0.85rem;"
        },
        {
          "text": "<strong>$12,200 (~46,000 ₪)</strong><br><span style=\"font-size: 0.76rem; font-weight: normal; color: #86198f;\">4 לילות 5★ אולטרה הכל-כלול + 13 בדירות יוקרה (חוסך אוכל)</span>",
          "style": "color: #701a75; font-weight: 700;"
        },
        {
          "text": "-",
          "style": "color: var(--text-muted); font-size: 0.85rem;"
        }
      ]
    },
    {
      "isSpecial": true,
      "rowStyle": "background: #fae8ff;",
      "category": "👑 אופציה: אוסטריה שבוע מלא בדאכשטיינקוניג",
      "cols": [
        {
          "text": "-",
          "style": "color: var(--text-muted); font-size: 0.85rem;"
        },
        {
          "text": "-",
          "style": "color: var(--text-muted); font-size: 0.85rem;"
        },
        {
          "text": "<strong>$15,200 (~57,000 ₪)</strong><br><span style=\"font-size: 0.76rem; font-weight: normal; color: #86198f;\">7 לילות 5★ אולטרה הכל-כלול + 10 ב-Kinderhotel/בקתה</span>",
          "style": "color: #701a75; font-weight: 700;"
        },
        {
          "text": "-",
          "style": "color: var(--text-muted); font-size: 0.85rem;"
        }
      ]
    }
  ]
},

  flightPills: [
  {
    "label": "🛫 פלורידה: TLV ⇄ MIA (אל על ישיר) ↗",
    "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20MIA%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop"
  },
  {
    "label": "🛫 ניו יורק: TLV ⇄ JFK (אמריקן / אל על ישיר) ↗",
    "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20JFK%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop"
  },
  {
    "label": "🛫 ניו יורק: TLV ⇄ EWR (יונייטד / אל על ישיר) ↗",
    "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20EWR%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop"
  },
  {
    "label": "🛫 אוסטריה: TLV ⇄ MUC (לופטהנזה / אל על ישיר) ↗",
    "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20MUC%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop"
  },
  {
    "label": "🛫 אוסטריה: TLV ⇄ VIE (אוסטריאן / אל על ישיר) ↗",
    "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20VIE%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop"
  },
  {
    "label": "🛫 קוריאה: TLV ⇄ ICN (קוריאן אייר / אל על ישיר) ↗",
    "url": "https://www.google.com/travel/flights?q=Flights%20from%20TLV%20to%20ICN%20round%20trip%20departing%202027-08-01%20returning%202027-08-18%20with%202%20adults%20and%202%20children%20nonstop",
    "style": "background: #fefce8; border-color: #fde047; color: #854d0e;"
  }
],

  principles: [
  {
    "icon": "🎯",
    "title": "עקרון גל: אטרקציית עוגן 1 בלבד ביום!",
    "desc": "אפס דחיסות. פעילות ממוקדת אחת בבוקר (עד 3 שעות), ואחה\"צ נטו בריכה, מנוחה ושקט.",
    "cls": "safe-kids",
    "style": "border-color: #10b981; background: #ecfdf5;"
  },
  {
    "icon": "👶",
    "title": "אפס אטרקציות לילה",
    "desc": "הכל ביום ובשעות אחה\"צ המוקדמות. במיטה ב-20:00–20:30!",
    "cls": "safe-kids"
  },
  {
    "icon": "🚕",
    "title": "מונית אוטונומית (Waymo)",
    "desc": "נסיעה ברכב ללא נהג בכלל – חוויה עתידנית לכל החיים (במיאמי!).",
    "cls": "highlight-purple"
  },
  {
    "icon": "🚀",
    "title": "שיגור חלל אמיתי ביום",
    "desc": "צפייה בטיל Falcon 9 של SpaceX ממריא בשעות היום/אחה\"צ.",
    "cls": "highlight"
  },
  {
    "icon": "🌊",
    "title": "פארק מים עולמי",
    "desc": "Volcano Bay / Kalahari (הגדול בארה\"ב) / Erding.",
    "cls": ""
  },
  {
    "icon": "🚗",
    "title": "נסיעות קצרות בלבד",
    "desc": "מעברי לינה עד שעה וחצי. נסיעות יומיות: 15–30 דק'.",
    "cls": ""
  }
],

  conclusion: {
  "title": "🎯 המסקנה הסופית להחלטה:",
  "points": [
    "<strong>1. פלורידה (~55,000 ₪):</strong> טיסת לילה ישירה באל על למיאמי (Dreamliner) + שיגור חלל ביום + <strong>מונית אוטונומית (Waymo)</strong> + Volcano Bay.",
    "<strong>2. צפון-מזרח ארה\"ב (~50,000 ₪):</strong> טיסת לילה ישירה לניו יורק + מנהטן + פארק המים המקורה הגדול בארה\"ב (Kalahari) + הרשי שוקולד וטבע ירוק.",
    "<strong>3. אוסטריה (~37,000 ₪):</strong> טיסה ישירה של 3.5 שעות + מערת הקרח הגדולה בעולם + פארק המים הגדול בעולם (Erding) + אפס ג'ט-לג וחיסכון של כ-18,000 ₪.",
    "<strong>4. דרום קוריאה (~42,000 ₪):</strong> טיסה ישירה לסיאול + המדינה הבטוחה והנקייה בעולם + Lotte World המקורה + Everland ופנדות ענק + חופי אי ג'ג'ו ולגולנד."
  ]
},

  stagePhotos: {
      'fl-ksc': {
        title: 'קוקואה ביץ\', מרכז החלל קנדי ושייט דולפינים',
        photos: [
          {
            url: 'images/falcon9_launch_real.jpg',
            title: 'שיגור רקטת SpaceX Falcon 9 (קייפ קנברל)',
            desc: 'צילום אמיתי של שיגור רקטת Falcon 9 באור יום מחצי האי קנברל – רעם מנועים אדיר ושובל אש ועשן מעל האוקיינוס.'
          },
          {
            url: 'images/atlantis_exhibit_ksc.jpg',
            title: 'מעבורת החלל אטלנטיס (Space Shuttle Atlantis)',
            desc: 'צילום אמיתי מתוך מתחם Atlantis במרכז קנדי – מעבורת החלל האמיתית שטסה 33 פעמים לחלל, מוצגת פתוחת כנפיים ותא מטען.'
          },
          {
            url: 'images/fl_florida_manatee.jpg',
            title: 'פרות ים בלגונת בננה (Banana River Manatees)',
            desc: 'צילום אמיתי של פרת ים פלורידית עם הגור שלה במים השלווים של נהר בננה הסמוך לקוקואה ביץ\'.'
          }
        ]
      },
      'fl-orlando': {
        title: 'אורלנדו: פארק המים Volcano Bay, דיסני Magic Kingdom ווילה',
        photos: [
          {
            url: 'images/fl_volcano_bay_krakatau.jpg',
            title: 'פארק המים Volcano Bay – הר הגעש Krakatau',
            desc: 'צילום אמיתי של הר הגעש העצום ביוניברסל וולקנו ביי, מגלשות המים ההידראוליות וחוף הרחצה הטרופי.'
          },
          {
            url: 'images/fl_volcano_bay_river.jpg',
            title: 'נהר האבובים Kopiko Wai ב-Volcano Bay',
            desc: 'צילום אמיתי של נהר האבובים המתפתל דרך מפלים ומערות סלע בתוך הפארק.'
          },
          {
            url: 'images/fl_disney_castle.jpg',
            title: 'טירת סינדרלה – דיסני Magic Kingdom באורלנדו',
            desc: 'צילום אמיתי של הטירה האייקונית של וולט דיסני וורלד – החוויה הקסומה ביותר לילדים בני 5 ו-7.'
          }
        ]
      },
      'fl-miami': {
        title: 'מיאמי: מונית אוטונומית Waymo, שמורת האוורגליידס ומוזיאון Frost',
        photos: [
          {
            url: 'images/fl_waymo_car.jpg',
            title: 'מונית אוטונומית Waymo One (ללא נהג)',
            desc: 'צילום אמיתי של רכב השירות האוטונומי של Waymo עם חיישני הגג – מושב נהג ריק לחלוטין שמנווט בעצמו ברחובות מיאמי.'
          },
          {
            url: 'images/fl_everglades_airboat.jpg',
            title: 'שייט רחפת אוויר (Airboat) באוורגליידס',
            desc: 'צילום אמיתי של סירת רחפת עם מדחף ענק המרחפת על מימי הביצה השקטים של האוורגליידס לצפייה בתנינים פראיים.'
          },
          {
            url: 'images/fl_frost_science.jpg',
            title: 'מוזיאון המדע והאקווריום Frost Science במיאמי',
            desc: 'צילום אמיתי של אולם האקווריום העגול הענק (The Oculus) עם כרישים וחתולי ים השוחים מעל הראש.'
          }
        ]
      },
      'ny-manhattan': {
        title: 'מנהטן: סנטרל פארק, טיימס סקוור ומוזיאון הטבע AMNH',
        photos: [
          {
            url: 'images/ny_central_park_bow_bridge.jpg',
            title: 'סנטרל פארק – גשר Bow Bridge והאגם',
            desc: 'צילום אמיתי של גשר הקשת ההיסטורי בסנטרל פארק, סירות המשוטים ומגדלי מנהטן ברקע.'
          },
          {
            url: 'images/ny_times_square.jpg',
            title: 'טיימס סקוור (Times Square) ו-Hard Rock Cafe',
            desc: 'צילום אמיתי של צומת האורות ושלטי הענק של מנהטן, סמוך לחנות הצעצועים FAO Schwarz ומסעדת Hard Rock.'
          },
          {
            url: 'images/ny_amnh_trex.jpg',
            title: 'שלד ה-T-Rex האייקוני במוזיאון הטבע AMNH',
            desc: 'צילום אמיתי של שלד הטירנוזאורוס רקס המפורסם בעולם באולם המאובנים של מוזיאון הטבע האמריקאי במנהטן.'
          }
        ]
      },
      'ny-kalahari': {
        title: 'פנסילבניה: פארק המים בפוקונוס, עולם השוקולד Hershey\'s ומפלי Bushkill',
        photos: [
          {
            url: 'images/ny_poconos_waterpark.jpg',
            title: 'פארק מים מקורה ענק בפוקונוס (Poconos Resort)',
            desc: 'צילום אמיתי של מגלשות הענק המפותלות, דלי המים העצום ובריכת הגלים המקורה בריזורט בפוקונוס.'
          },
          {
            url: 'images/ny_hershey_world.jpg',
            title: 'עולם השוקולד של הרשי (Hershey\'s Chocolate World)',
            desc: 'צילום אמיתי של מתחם עולם השוקולד בפנסילבניה – רכבת סיור המדמה את תהליך ייצור השוקולד וסדנת הכנת שוקולד אישית לילדים.'
          },
          {
            url: 'images/ny_bushkill_falls.jpg',
            title: 'מפלי בושקיל (Bushkill Falls) בפוקונוס',
            desc: 'צילום אמיתי של המפל הראשי וגשרוני העץ התלויים בין העצים והמצוקים – "הניאגרה של פנסילבניה".'
          }
        ]
      },
      'ny-nature': {
        title: 'הרי הקטסקילס: שמורת Minnewaska, ספינת הקיטור בלייק ג\'ורג\' ואחוזת Mohonk',
        photos: [
          {
            url: 'images/ny_minnewaska_cliffs.jpg',
            title: 'שמורת הטבע מינוואסקה (Lake Minnewaska Preserve)',
            desc: 'צילום אמיתי של אגם המים הזכים המוקף מצוקי אבן לבנים ויערות ירוקים בהרי השוואנגונק / קטסקילס.'
          },
          {
            url: 'images/ny_lake_george_steamboat.jpg',
            title: 'ספינת הקיטור Minne-Ha-Ha באגם לייק ג\'ורג\'',
            desc: 'צילום אמיתי של ספינת הקיטור ההיסטורית האותנטית עם גלגל המשוטים האחורי האדום בהפלגה באגם.'
          },
          {
            url: 'images/ny_mohonk.jpg',
            title: 'אגם מוהונק וההרים (Mohonk Mountain & Lake)',
            desc: 'צילום אמיתי של אגם מוהונק הקסום, המצוקים הדרמטיים והטירה ההיסטורית בעמק ההדסון והקטסקילס.'
          }
        ]
      },
      'at-salzburg': {
        title: 'חבל זלצבורג: גני מיראבל, טירת הוהנוורפן ומערת הקרח הגדולה בעולם',
        photos: [
          {
            url: 'images/at_mirabell.jpg',
            title: 'גני ארמון מיראבל (Mirabell Palace) בזלצבורג',
            desc: 'צילום אמיתי של ערוגות הפרחים, מזרקת פגסוס וברקע מבצר זלצבורג הנישא מעל העיר.'
          },
          {
            url: 'images/at_eisriesenwelt_cave.jpg',
            title: 'מערת הקרח הגדולה בעולם (Eisriesenwelt Werfen)',
            desc: 'צילום אמיתי של מבני הקרח הטבעיים המרהיבים בבטן ההר – סיור מודרך מרתק עם עששיות ידניות.'
          },
          {
            url: 'images/at_hohenwerfen.jpg',
            title: 'טירת הוהנוורפן (Burg Hohenwerfen)',
            desc: 'צילום אמיתי של מבצר האבירים העתיק הניצב בראש צוק תלול בעמק זלצבורג – כולל מופע בזים מסורתי.'
          }
        ]
      },
      'at-tyrol': {
        title: 'חבל טירול וזלצבורג: אגם צל-אם-זה, מפלי קרימל ופארק המים Therme Erding',
        photos: [
          {
            url: 'images/at_zell_lake.jpg',
            title: 'טיילת אגם צל-אם-זה (Zeller See)',
            desc: 'צילום אמיתי של טיילת האגם וההרים האלפיניים שמסביב – שייט סירות חשמליות, ברווזים ומדשאות רחצה.'
          },
          {
            url: 'images/at_krimml_waterfalls.jpg',
            title: 'מפלי קרימל (Krimml Waterfalls) – הגבוהים באירופה',
            desc: 'צילום אמיתי של עוצמת המים האדירה של מפלי קרימל – 380 מטר של שאגת מפלים ורסס מים קריר ומרענן.'
          },
          {
            url: 'images/at_therme_erding.jpg',
            title: 'פארק המים והספא הגדול בעולם – Therme Erding',
            desc: 'צילום אמיתי של כיפת הזכוכית הטרופית של תרמה ארדינג, בריכת הגלים ועשרות מגלשות המים הענקיות.'
          }
        ]
      },
      'at-dachstein': {
        title: 'מלון Dachsteinkönig – Familux Resort ועמק גוסאו',
        photos: [
          {
            url: 'images/at_dachstein_gosau.jpg',
            title: 'נופי עמק גוסאו והרי הדאכשטיין',
            desc: 'הנוף המרהיב הנשקף מסוויטות המלון ומבריכת האינפיניטי המחוממת – פסגות מושלגות ומרחבים ירוקים.'
          },
          {
            url: 'images/at_therme_erding.jpg',
            title: 'עולם מים ומגלשת אבובים 100 מטר מקורה',
            desc: 'עולם מים מקורה ענק לילדים בתוך המלון עם מגלשת אבובים ענקית באורך 100 מטר, בריכות גלים ומתחמי שכשוך.'
          },
          {
            url: 'images/at_hohenwerfen.jpg',
            title: '2,000 מ"ר של מתחם משחקים ומועדוני ילדים',
            desc: 'מועדוני ילדים מחולקים לפי גילאים עם צוות פדגוגי מוסמך מ-08:30 בבוקר עד 21:00 בערב.'
          }
        ]
      },
      'kr-seoul': {
        title: 'סיאול: פארק השעשועים המקורה Lotte World, עולם הפנדות Everland וטכנולוגיה',
        photos: [
          {
            url: 'images/kr_lotte_world.jpg',
            title: 'פארק השעשועים המקורה הגדול בעולם (Lotte World Adventure)',
            desc: 'צילום אמיתי מתוך מתחם Lotte World בסיאול – עולם אגדות מקורה וממוזג לחלוטין עם טירת קסמים, רכבות עדינות ומתקנים מושלמים לגילאי 5 ו-7.'
          },
          {
            url: 'images/kr_everland_panda.jpg',
            title: 'עולם הפנדות הענקיות (Everland Panda World)',
            desc: 'צילום אמיתי של דובי הפנדה הענקיים האמיתיים בפארק Everland – חוויה נדירה של צפייה מקרוב בפנדות מכרסמות ענפי במבוק.'
          }
        ]
      },
      'kr-jeju': {
        title: 'האי הגעשי ג\'ג\'ו (Jeju Island): חופי טורקיז, לוע הר געש וריזורטים',
        photos: [
          {
            url: 'images/kr_jeju_island.jpg',
            title: 'מכתש הר הגעש והחוף (Seongsan Ilchulbong, Jeju)',
            desc: 'צילום אמיתי מהאוויר של מכתש הר הגעש הירוק הייחודי הנושק למי הטורקיז של האי ג\'ג\'ו – "ההוואי של אסיה".'
          }
        ]
      }
    }
};
