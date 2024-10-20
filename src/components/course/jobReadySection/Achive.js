import React from "react";
import styles from "./jobReadySection.module.css";

const Achive = () => {
  return (
    <section className={styles.section}>
      <h2>Achieve your career goals with our Placement Support</h2>
      <div className={styles.Container}>
        <div className={styles.box}>
          <div className={styles.ContentBox}>
            <h5>Placement Support</h5>
            <p>
              Unlock exclusive access to a wide range of job opportunities, with
              personalized support to enhance your interview readiness and
              optimize your professional profile.
            </p>
          </div>
          <div className={styles.RoundBox}>
            <svg
              height="80"
              width="80"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" fill="#0072BC" r="50" />
              <mask
                height="60"
                id="mask0_2844_6407"
                style={{ maskType: "alpha" }}
                width="60"
                x="20"
                y="20"
                maskUnits="userSpaceOnUse"
              >
                <rect
                  height="60"
                  width="60"
                  fill="url(#pattern0_2844_6407)"
                  x="20"
                  y="20"
                />
              </mask>
              <g mask="url(#mask0_2844_6407)">
                <rect
                  height="62.5"
                  width="62.5"
                  fill="white"
                  x="18.75"
                  y="17.5"
                />
              </g>
              <defs>
                <pattern
                  height="1"
                  id="pattern0_2844_6407"
                  width="1"
                  patternContentUnits="objectBoundingBox"
                >
                  <use
                    transform="scale(0.0104167)"
                    xlinkHref="#image0_2844_6407"
                  />
                </pattern>
                <image
                  height="96"
                  id="image0_2844_6407"
                  width="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6UlEQVR4nO2d36tVRRTHJ4W8pQVJYD1UkNZNsL9ASvoTtBB/9Fb2F+itiCATf0VQUGDZe3ERtYKK1IcS66b/QfmkpN2TDxFcw3Pg+onxrOi02zNn33tmzsw+sz5w4HDvPrNm1nfv2TOz1p5tjKIoiqIoiqIoiqIoYwC4GzgKXCcd14Ajti7FiS4Nz4UjpjQSn/lVfjOlQWaY0iAzTGmQGaY0UjkCFUAFyAK9AhKjAiRGBUiMCpAYFSAxKkBiVIDEqACJUQESowIEBFgJPAO8C8wBHaDH5NCTNs1JG21bV+bg+HuAGalcaXSk7VOpnP8CcDW1FzLA+mDbOB1/F/AWcDt1yzPitsS4V8R2/grgs9StzZhPo4oAHEzdwhbwdsw+f1i3cwZ4GZgGVpsJAVgNPAXsAc4O8YH10dYYox3fDfdn4FlTCMAW4BePP64EHR3JcMvF98ADpjCAtcB5j1/2hpxkdTxnfnHOr4hw2eGb+SA3ZNu1eFR+zhQO/e7IxeYQBuzUu44zQVowAQDnHD56J0Thdv2jjpeC1H4CAF5x+OhCiMJ/dxQ+HaT2E4AMUeuYD1F411H4miC1nwCsLxw+uhWi8FqC1HyCiOYnFaAZKkBiVIDEqACJUQESowIkRgVIjAqQGBVgiQD3ATuB48AlWXLpycd+vyj/22GPbVCeTsSaADwMHANu0hx77CfABk+5t3Qm7AFYZQPmwALLpyfpJ6tqyt9VFzM3ozIJSxHAgxI6DcWPwEM1dt5UASoAmyJl8NnA+6Yae6cGDzKj4rJuWgCwLnL6pBVhXcXmI4PdXLECAFPSVfiwsY5ZGQ3dyWWSz7T8bdYTD/mHC9V7AvC6CsCdG66Pk8DjDYRcX+1WajhUc8P/NciJ6rJo8h9qLjiqvgjsW2ZulP1tHd2qmMAbJQtwzHO27ouUoPZx5dhH7bC0OAHoz3Bdk6yTAco/7Sh7oRont7PpEgXY2bSbWGb5GzyPX22vHHu0RAGOO6o8G9DGCYeNjyrHPV+iAJccVd4R0MZuh425ynFPlyjADUeVnwxow84T6uiEstFmAbqxE8miJmLVGFMBKgD3O9yyYELTQgFuJOyCroSy0WYBLjqqvCugjReb3IRj96lDw3QFDkPfC2Vj0FinTenp9GO4ddgTaX2A8p/wTMRGH/fXGHQt6e4x7VuKOBVgl4AvHGX/AdwbriXDH1E6azKFfgDdxcwI5b7mKffDsK3416jdmsXFFpMh+NdrFpcqgpz5r3qWo/8CHovVGN9jqvZh5bWmnS+IOO1LM6n0+Z8n2Z6g4Tr4+RxFoB+V+mGI43oyotktz3mtkc9GGWqeaLjx1DdR9w2S+KovuH05x2eG6QflbeB8HEQXYVuDzTrOySObG3N5iI9+Wsq4RPg6tggHyJ8ZR2LWd2Oy/200EWTDJrspUc4s1k2I5J5wqEGaiQ872tkvZ3qaK0GGZAcy37Ks6wrA2LCkDaAvMUfUTrI+sIH2ATHTiSCV2DrGvnW5V8Jee8I46m9HO9ttGBH4SYbaXZlFX5UVgPft1VQ3w81FhClppN2aJVe+qqYPBmx/ehEG7g2b7e4gMvaeH7GvDc2fsowwlVCE/6W0K4FQEdojwuHU9SzhDbFfegQYffsaZSQRrg35uRK5O/pPGrsSX4TD8tre6/K9vBdHK4qiKMbF32ee+qKLKFhCAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.ContentBox}>
            <h5>Mock Interviews</h5>
            <p>
              Sharpen your interview skills with tailored mock sessions that
              simulate real-world scenarios, giving you the confidence and
              experience to excel in actual job interviews.
            </p>
          </div>
          <div className={styles.RoundBox}>
            <svg
              height="80"
              width="80"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" fill="#0072BC" r="50" />
              <mask
                height="62"
                id="mask0_2844_6423"
                style={{ maskType: "alpha" }}
                width="62"
                x="19"
                y="20"
                maskUnits="userSpaceOnUse"
              >
                <rect
                  height="62"
                  width="62"
                  fill="url(#pattern0_2844_6423)"
                  x="19"
                  y="20"
                />
              </mask>
              <g mask="url(#mask0_2844_6423)">
                <rect
                  height="64.5833"
                  width="64.5833"
                  fill="white"
                  x="24.1667"
                  y="17.416"
                />
              </g>
              <defs>
                <pattern
                  height="1"
                  id="pattern0_2844_6423"
                  width="1"
                  patternContentUnits="objectBoundingBox"
                >
                  <use
                    transform="scale(0.0104167)"
                    xlinkHref="#image0_2844_6423"
                  />
                </pattern>
                <image
                  height="96"
                  id="image0_2844_6423"
                  width="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADyElEQVR4nO2dy04UQRiFKy5UhBg16gITfQN8Ao3yCAZNXKEbNroGQkwEdYFbL5FHYOElEV/CGFHjQo0uQEXRhdy8MIbwmZIi4jDd0z10dfVMny+ZhDBFn65zav6ubmq6jRFCCCGEEEIIIYQQIiFAB9AHTADTQIXWpeL6OOH63B5soAA7gGFgnvIyD1y2XuRt/hHgZejeF4gXwOE8zZ8J3eMC8tF7CK7saOTHfxL8lSNX80U8w77Mbwfm6swQ+oFO9xqImBElbbepvZeOpfMgyf7OeZkduWlXHAM1/mZgC+0i24emzv5a+nyI2rlvHJ0RI6bRdusEH/kp99cy4UPUnoDEoQD+Me0jgGXiqVVaBrfQrsglKG5/Lcs+ROtRcbUxyUE4SbtN7TPvVHoPkuzvX3yIixQogMAogMAogMAogMAogLIEYEoOCiAsCiAwCiAwCiAwCiAwCiAwCiAwCiAwCiAwTRsAcBC4BjwDvrvXJHDVvtfA9nYBtzNeKmlXONwC2vLyxeQhBJwGFmM6bt/rSbnNMfwxlocv9TqYiZAzfzVBp1eThgBsA37ijx9Ww6cvSTq5ZSFXduJGfjULwIEE21UACQOwNT8tVwpQgu7E6NbEZE0WQsDzBjo/mXDbbcDNOssn0/INuNEyB2FgqQETFk2BabYA0tT/dRZMgSGCQgq5Ob+XEhSKZgvAnmSlZcQUmFafhs4D+02BaaoA3HZ6UpyInTIFp+kC2BDCQp2Rn8p8XQtKH8IBe5IFPHXT0yX380gjZUfXggKCLkWEBQUQHnQtKHgAbboW9L8h24HrwCeyYwYYtds2BSHL2WGmQs4oX4yagpDWl9yEMh751Xw2BYEIggvhGVMQctu/tELenPfVwQYhguBCwFf88cUUhLS+5CYE3PdmP9ytoad1QVWGHAV+ezC/AnTVCEDrgmqYchZYydD8FeBMDR0tS4kpRceBqQzMnwKORWgogASXCS4C7xow/i1wIW5pSA4lqDXWBW04Ntg7joy7GwDOAr/ca9b9bty16UqxXV0LKiM02yeg1UABlCeAqGWFHaakALtzW80HvIkQO2FKCtAd4clrH2IPIsQempICPIrw5J4PsfNEM2RKBnApxo9eH4L76nwBzt7Y9WQrHxNYe1hFd8zIx30/YY+vHRiKERZr9Hsx3wWwE3jihMRmHluPvAXgQjgEfKghXnbe53ZzWXcHWZu2WGMyt0eYVJWjwZI/xGfOPdsg34f4VAWxFzjnzhNeNfhFvGZhyfXR/ru119tsRwghhBBCCCGEEEKYVuQPtTD8bIvrargAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.ContentBox}>
            <h5>Resume BuildUp</h5>
            <p>
              Craft a compelling resume with expert guidance, ensuring your
              profile stands out in a competitive job market and highlights your
              key strengths and achievements.
            </p>
          </div>
          <div className={styles.RoundBox}>
            <svg
              height="80"
              width="80"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" fill="#0072BC" r="50" />
              <mask
                height="61"
                id="mask0_2844_6428"
                style={{ maskType: "alpha" }}
                width="61"
                x="20"
                y="20"
                maskUnits="userSpaceOnUse"
              >
                <rect
                  height="61"
                  width="61"
                  fill="url(#pattern0_2844_6428)"
                  x="20"
                  y="20"
                />
              </mask>
              <g mask="url(#mask0_2844_6428)">
                <rect
                  height="63.5417"
                  width="63.5417"
                  fill="white"
                  x="20"
                  y="20"
                />
              </g>
              <defs>
                <pattern
                  height="1"
                  id="pattern0_2844_6428"
                  width="1"
                  patternContentUnits="objectBoundingBox"
                >
                  <use
                    transform="scale(0.0104167)"
                    xlinkHref="#image0_2844_6428"
                  />
                </pattern>
                <image
                  height="96"
                  id="image0_2844_6428"
                  width="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAI3klEQVR4nO1deYxWNRB/gMipghAVhABqREM8EzAeUUAUBCEiRwhoOFTEKwqo8YhR/wFFhHAj3uiCkBVRUWMQFRD0D0XEFQ2iXCEEdgWWG9H9meabjW8fM31tv/ed219CQj6m02mnnc5Mp48g8PDw8PDw8PDw8PDwyFMA6ABgDIASAOsAVAD4m/5U0G8lRNMh1/IWBQDUBTAYwGoAVTCHol0FYJDiketxFCQAdAfwC9JHGYCuuR5PwQBAQwCzkCzUjpgBoEFQLABwOYDZAH4DcAxAJa226QAuduTZAsB3yBzWqj4cZbsMwBwa7wEAR2m8UwFcFGR5hc6Nscn/kiIaWk5+GTKPMhslAGgC4I2Y8Z4A8BKA+s4TayhMIwArLQa73GTbI6VUk5W/FcA0ADcD6EiT04T+3pP+TdGY7AQTuRTvby3G+3FGlQBgHuwxzYDvrBge2wAMN/FoyHMaAWB7DM+ZBrzmO4z3hSATIBto4wpW4x8AnWK8HR0WA2jsIK9avaUavmos3TTtr3Icr4pLzrOV12RAb8MdUwWe9WJczUkA6qQhcx0Ak2POA3ZXkd13Reyutx1ICzr1OXwEoBWAtgA+FWh+FPgOjln5zpMfUYJuJwwS2v0h0L8fGq864zjsVzswXdnDwjwmdKTcz7NCdEowDgcFvqs1Nr9xgvI30ZwJqwSlVQnmtFmIrg15QBzuSUp4dahtFjqZH6E921QBlNupEuiHJyJ8zf5GCn0pGdoz9FWCe11jYdCOMN71LoLfAhlXR2jvEujWM3zHCLRbM5G/ofNG7SwOoxn63wXaARG6Hqbz4yq4svEc1jG0nwm0sxnakqwcYDX7VOkIDu9YOB3vMeZKRcexFsJF4HZk9zjcHaFtTi4Yhx4M73UCbc+0hHbbzd8ztP0E2oOMGXpEc0a2TEfgCQLjfdFTnoIfDuUATmF4Vwj0FzoLHD8eFTFz2CNE5yq/ZWKG1OI7LNA+7irsqQB2m/r1AD4RaOcJ/I8L9E2dBDYbU1Ohz2MCfYmJGSLa1zRnWj0XYYcJDJV30DFC20wzoT3zSAGnWyrgNoH+MGMBVHZYQm8XYb8RmC1naO8UaP+SklP5boJCZkilnmPNENFLCcVlgQ0AXAoZtzP0Hwq0b2r6WCe06WUlrN24epsewqE2CyzMkEoYQogf2tsIqvL9HHZED1QAp2nSFH00fZTksxsaatNf4w01YtL10s6eaGMnFXMOzzD0QzX5EDHnHhOI1QsyE4htNw3EIpN60MIaqIsZDnuMrkQBPCgwUD5+K4Z+iUsQEpOKGBEkDACjhL6UDO1i2i4U2i5kaM8nk8NhmImgUnp4keDWHRHo+xn0tUpouz3JbCLJqcwnh5UG7QeYmqGYjMCauI66Qcb1DP0QgfaAyX0w9OnoJUnkhChVsEjTz0ADHrZmSIqiFa7UdSQJWibQq5w9hwUWmdYyjbCTE7iQeVnDf4OpkpXXY2GGdIm/uVIHLTXB0QMMfWMAh0xXhWZgXWOu/kpdzBGZHel8AvV5gwW/gZZm6GmBvpIdD4D7NObkdAu7eMj2MgWyexg+E0aaeEe0+kZpbH41plvKaLXg6G5EWtBDbbbYW5aewUmHtcHgGlCpSBy2kbJ6qWIoWuVN6e8q0znToBpCYY1LlZzG5C4U6D8wzo8B2CQQ9xeYK7+Ww04AnR3vnX9G5qH6ONNBvi40Ng67hTZShvgHjljKebQWmKs0s4Qj7DYzU8JaZA5rHCd/mCba1ylAyj3t5IilixdWYE3EFz7kJti6kkiZo5mONTk6Wabbmh3y0iYayDJJc6HFYR9HLF0+tBWY19fkc8JYqvJFNgMPxSRJ1IpusPF2Ijku6To2jHc1Gd9OQpsdHLFkf4fE+NlPakLv8CRYv1pBagUOoojZ9oHGSnIdrYM5SifEKV+N+QldnKLJd50cEZMmOZQaCNxPc4ZUo5yLpk2h0rkA7lWZS5U+pqzjcfpTTr+pfxsdl9sx2HlSRrMaylr0NeC1wrguFcAdmtV0nUFnlwD4k2n/E4DnANwoHej5BADnUqnJ87Rzo9isq3UN8emjUeCtXINmmkBjo8lVIUXTX4c8DrH4tVCA1I6ovh1cYfK2QDkuALYIc1khOgMApmi0VmIocH26xCiax3FInXV9ueoOgVa9E4DpnUo0fNbZv/uTHlyxgQ5mCTu4tI7pDVd1oVFnx22sHnf8qjFz+YBDJOMrLi8rKbF4QnOW9jFl9LpGyC2m0SS5c5InUAhYbuo+AzgHwC4NrylGkx+6gFivYbYsLk8P4BoDd64QUB5XZKvOBgBfaXissX47BuACuliX8FSMzy4l6woRFWo3a8ar0hXQ1Ea5xSV08ldpIsGbhHZfoPjwpcbf181ResXGMVd6u6KVEgaP7goZXZlkm1rhEp5Na/JDfr1UpqjQ3fApq0rnjlWHVZCnQOqJ1ThN6rnGfa6yAJp5+TyxWIjCc6lSOroDpMcKY4MCAYDxwhg2RuhaC3Tb03oXoPHluTuDGmG1pnwjb1e+4FJyOMDcXXAFbNcGmYAKo6O9MTQsggIDDMfBkDycSaHqRt8CuwpepApYmsTb5jjBmofTzq6CF6ECNgE4I1vCdaG8kFdACspruiIrkx9SwkOqZ+Z3FkGBAYbjoJ9H5krIk0rQa6ECXs2NhFQ5wPxW2xTQKMgnZEMBSH2ppJQKAQ5QCWDHhPsozIWUacGRmnwu/7JXqmFy7McrgEPMt38WBwnBK0BATP1RZZAQvALcFLA/SAheAQI0NfdObxM0/fgzQFPyrQ5c7tqwTZAQvALiPaHFVKNZSY8L2yTch98BuYRXQI7hFZBjeAXkGF4BOYZXQI7hFZBjFLICKougLKW18fPSfIPmW3DjggIBgEdNvxacdwDwoiD8USr7O+mrW3lWmji+uuAga/87hgvo6yGzYkrYix376FV/9q8lNV9WrI2Ym+3Jr6v5VlxtxOGsvgr1CsixAkgJ3gT9jzlZnfzQQ74ZdBDVVuylz+DkV22Qh4eHh4eHh4eHh0eQz/gPN6z0vRp/eegAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.ContentBox}>
            <h5>Unlimited Interview calls</h5>
            <p>
              Maximise your chances of landing the perfect job with unlimited
              interview opportunities, backed by continuous support and feedback
              to refine your approach.
            </p>
          </div>
          <div className={styles.RoundBox}>
            <svg
              height="80"
              width="80"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z"
                fill="#0072BC"
              />
              <mask
                height="60"
                id="mask0_2932_7"
                style={{ maskType: "alpha" }}
                width="60"
                x="20"
                y="20"
                maskUnits="userSpaceOnUse"
              >
                <rect
                  height="60"
                  width="60"
                  fill="url(#pattern0_2932_7)"
                  x="20"
                  y="20"
                />
              </mask>
              <g mask="url(#mask0_2932_7)">
                <rect height="62.5" width="62.5" fill="white" x="20" y="20" />
              </g>
              <defs>
                <pattern
                  height="1"
                  id="pattern0_2932_7"
                  width="1"
                  patternContentUnits="objectBoundingBox"
                >
                  <use
                    transform="scale(0.0104167)"
                    xlinkHref="#image0_2932_7"
                  />
                </pattern>
                <image
                  height="96"
                  id="image0_2932_7"
                  width="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD+klEQVR4nO2cy04UQRSGx5igglESb/gEQFTQRMWV+gLqE4A+gYpGBQnB23PgCyC60aiImnjdoDvBjbLQhRqvAyvFz1SoBZGuZqaruqu65nwJyYRJ/3XO+Xu6q6u7T6UiCIIgCIIgCIIgCIIgCIIgJAC0AieAm8AMMEfjMqdrMA4cV7XJbacB1gLnge++sw6Yb8A5YI3r4m8HXvrOrkS8ANpcFn/Wd0YlZNbaBPVTkj3fiudWhyPggt34AnDWZraTdsIdAw4BLZUGBWjRNVCzIBNfgY1ZxNVU00R/LhmVGLWnp9SrL4ugmucncSOXDCLAac2Atwaxg7lEHwH6cJTETBaxqkFsfS7RR4CqjaFm1SxiieQSeUQ4q5sYkA0xwDNRGwB0AoPAJDCtVyPn9OdJ/V2H5xjjMwDYAzyidh4C3Z5ijccAYBVwDVigfv4AV5RGwTHHYQCwGriOPaNKq8C4ozFgGHcMFRh3+Q0AeoDfDg1QWvsKij0KA+6lFPMDcBJoB5r1XwdwSn9n4k5BsZfbAKArpYhP0pZ21XfAU8O2f4GdBcRfegOGDEN/ArbUsP1W4ItBY7CA+EtvwAPD0MN1aIwYNO7nG30cBswahu6qQ2O3QeNdvtHHYcC8Yeh1dWioE3MS8/lGH7cBzV7W5RvQgPeGobvrXDtKQg5BNRRvwsFJ+JJB414lZ2L4BVw0DP1ZTTEtp6EDBcRfegN26YumLBdirStciO0oIP5yG6AA7prG18sNp/XyQ7N+OKpT/+9jyna3KwUQiwH7c1iM21tQ7OU3QCHL0WHckBl1sPfLDRnLW5JX9e3FelHbXJZbkm5+Dd36RnutTNazduQSU0D+hBzC4k2YAb1iOq0fn6zqzxP6fYZ2zzHGa0AZEAM8IwZ4RgzwTKkMADbrqeKrgt+4V2NN6bE3Oc7JTd2cCZn1jwE/8I96EfGow7wS8SdkLv4C4aBiOeIot0T8CSUfdkLY85P6PFgfjjDgT2i5rjruhsqIg/wS8Se0XPc14TLlIL9E/Akt1/1lkO6x1a4jhgOGGH42ggG56EaXX/ABWhJ8fsEHaEnw+QUfoCXB5xd8gJYEn1/wAVoSfH7BB2hJ8PkFH6AlweeXV7uamA0ANji7wEtp2HTIMsiYDTjssmGTqRHduGWQMRtwyyA7lkVM9UJ224oxYgNYbFlsojeLYKteIzdxU//kWhrVABafzD6csudnb1tZg6tCbfTbti5WjaiFbDwDmjIboE1oS3lxTjCjarbNqvj/3cd9nDKYsLxpt5v29UtMaNLtedVJRUhG1eaM9WFnBSNUR5I+1Y53yRPKjUoVeKNr0Zt5tiMIgiAIgiAIgiAIgiAIglCJnX9/MK96DNCeGgAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achive;
