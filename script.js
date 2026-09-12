    function showTab(tabId, shouldScroll = false) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.dest-card').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.sticky-pill').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }

      // Activate all elements matching data-tab
      document.querySelectorAll(`[data-tab="${tabId}"]`).forEach(el => {
        el.classList.add('active');
        const badge = el.querySelector('.dest-badge');
        if (badge && !badge.classList.contains('candidate')) {
          badge.textContent = 'נבחר כעת ✓';
        }
      });

      // Reset badges of non-active cards
      document.querySelectorAll(`.dest-card:not([data-tab="${tabId}"])`).forEach(el => {
        const badge = el.querySelector('.dest-badge');
        if (badge && !badge.classList.contains('candidate')) {
          badge.textContent = 'הקש לבחירה';
        }
      });

      // Update URL hash
      if (history.replaceState) {
        history.replaceState(null, null, '#' + tabId);
      }

      // Update Side Menu active highlight
      updateSideMenuActiveTab(tabId);

      // Smooth scroll if requested
      if (shouldScroll) {
        const sec = document.getElementById('itinerarySection');
        if (sec) {
          const yOffset = -20;
          const y = sec.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }

    function jumpToItineraryTop() {
      const sec = document.getElementById('itinerarySection');
      if (sec) {
        const yOffset = -20;
        const y = sec.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    /* Side Menu Drawer Controller */
    function openSideMenu() {
      const menu = document.getElementById('sideMenu');
      const backdrop = document.getElementById('sideMenuBackdrop');
      if (menu && backdrop) {
        menu.classList.add('open');
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
        updateSideMenuActiveTab();
      }
    }

    function closeSideMenu() {
      const menu = document.getElementById('sideMenu');
      const backdrop = document.getElementById('sideMenuBackdrop');
      if (menu && backdrop) {
        menu.classList.remove('open');
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    }

    function navigateToTab(tabId) {
      showTab(tabId, true);
      closeSideMenu();
    }

    function navigateToSection(sectionId) {
      closeSideMenu();
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -25;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    function updateSideMenuActiveTab(tabId) {
      const currentTab = tabId || (document.querySelector('.tab-content.active') ? document.querySelector('.tab-content.active').id : 'tab-florida');
      document.querySelectorAll('.menu-dest-item').forEach(item => {
        if (item.getAttribute('data-tab') === currentTab) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    // Touch swipe support to close side menu on mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const sideMenuEl = document.getElementById('sideMenu');
    if (sideMenuEl) {
      sideMenuEl.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      sideMenuEl.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        // In RTL, swiping right (finger moves rightward -> touchEndX > touchStartX) closes drawer
        if (touchEndX - touchStartX > 60) {
          closeSideMenu();
        }
      }, { passive: true });
    }

    // Auto-select tab based on URL hash on page load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && document.getElementById(hash)) {
        showTab(hash, false);
      }
    });

    // Photo Data for Each Stage - 100% Authentic Attraction Photographs
    const stagePhotos = {
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
    };

    function openPhotoModal(stageKey) {
      const stage = stagePhotos[stageKey];
      if (!stage) return;

      document.getElementById('modalTitle').textContent = stage.title;
      const gallery = document.getElementById('modalGallery');
      gallery.innerHTML = '';

      stage.photos.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
          <img src="${item.url}" alt="${item.title}" loading="lazy">
          <div class="gallery-card-desc">
            <strong>${item.title}</strong>
            ${item.desc}
          </div>
        `;
        gallery.appendChild(card);
      });

      document.getElementById('photoModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closePhotoModal() {
      document.getElementById('photoModal').classList.remove('active');
      document.body.style.overflow = '';
    }

    function closeModalOnBg(event) {
      if (event.target.id === 'photoModal') {
        closePhotoModal();
      }
    }

    // Close on Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closePhotoModal();
        closeSideMenu();
      }
    });
