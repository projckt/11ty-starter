(() => {
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (vw >= 768) {
    let el = document.querySelector("#hero-img-container-mob");
    el.parentNode.removeChild(el);
  } else {
    let el = document.querySelector("#hero-img-container-desk");
    el.parentNode.removeChild(el);
  }

  const copyyearEl = document.getElementById("copyright-year");
  const date = new Date();
  const year = date.getFullYear();
  copyyearEl.innerText = year;

  /* For the SVG animation */
  const s = Snap();
  const gecContainer = Snap("#gec-container");
  const kontacContainer = Snap("#kontac-container");
  const particleAirtablePath = Snap("#particle-airtable-path");
  const particleAirtablePathLen = particleAirtablePath.getTotalLength();
  const particleGsheetsPath = Snap("#particle-gsheets-path");
  const particleGsheetsPathLen = particleGsheetsPath.getTotalLength();
  const particleMailchimpPath = Snap("#particle-mailchimp-path");
  const particleMailchimpPathLen = particleMailchimpPath.getTotalLength();
  const gecParticlePath = Snap("#gec-particle-path");
  const getParticlePathLen = gecParticlePath.getTotalLength();
  const kontacParticlePath = Snap("#kontac-particle-path");
  const kontacParticlePathLen = kontacParticlePath.getTotalLength();

  gecParticlePath.attr({
    stroke: "#E8B3D6",
    strokeWidth: 11,
    strokeDasharray: `10 ${getParticlePathLen}`,
    strokeDashoffset: 1,
  });
  kontacParticlePath.attr({
    stroke: "#B3E8BE",
    strokeWidth: 11,
    strokeDasharray: `10 ${kontacParticlePathLen}`,
    strokeDashoffset: 1,
  });

  const animateForKontac = () => {
    kontacContainer.animate({ transform: "s1.05" }, 200, mina.easeinout, () => {
      kontacContainer.animate(
        { transform: "s0.95" },
        200,
        mina.easeinout,
        () => {
          kontacContainer.animate(
            { transform: "s1" },
            200,
            mina.easeinout,
            () => {
              Snap.animate(
                50,
                -kontacParticlePathLen,
                (value) => {
                  kontacParticlePath.attr({ strokeDashoffset: value });
                },
                750,
                () => {
                  animateForIntegrations("kontac");
                }
              );
            }
          );
        }
      );
    });
  };
  const animateForGec = () => {
    gecContainer.animate({ transform: "s1.05" }, 200, mina.easeinout, () => {
      gecContainer.animate({ transform: "s0.95" }, 200, mina.easeinout, () => {
        gecContainer.animate({ transform: "s1" }, 200, mina.easeinout, () => {
          Snap.animate(
            50,
            -getParticlePathLen,
            (value) => {
              gecParticlePath.attr({ strokeDashoffset: value });
            },
            1000,
            () => {
              animateForIntegrations("gec");
            }
          );
        });
      });
    });
  };
  const animateForIntegrations = (particleName) => {
    let strokeColor = "";

    if (particleName === "gec") {
      strokeColor = "#E8B3D6";
    } else if (particleName === "kontac") {
      strokeColor = "#B3E8BE";
    }

    particleAirtablePath.attr({
      stroke: strokeColor,
      strokeWidth: 11,
      strokeDasharray: `10 ${particleAirtablePathLen}`,
      strokeDashoffset: 1,
    });
    particleGsheetsPath.attr({
      stroke: strokeColor,
      strokeWidth: 11,
      strokeDasharray: `10 ${particleGsheetsPathLen}`,
      strokeDashoffset: 1,
    });
    particleMailchimpPath.attr({
      stroke: strokeColor,
      strokeWidth: 11,
      strokeDasharray: `10 ${particleMailchimpPathLen}`,
      strokeDashoffset: 1,
    });

    if (particleName === "gec") {
      Snap.animate(
        40,
        -particleAirtablePathLen,
        (value) => {
          particleAirtablePath.attr({ strokeDashoffset: value });
        },
        500,
        () => {
          Snap.animate(
            50,
            -particleGsheetsPathLen,
            (value) => {
              particleGsheetsPath.attr({ strokeDashoffset: value });
            },
            500,
            () => {
              Snap.animate(
                50,
                -particleMailchimpPathLen,
                (value) => {
                  particleMailchimpPath.attr({ strokeDashoffset: value });
                },
                500,
                () => {
                  requestAnimationFrame(animateForKontac);
                }
              );
            }
          );
        }
      );
    } else if (particleName === "kontac") {
      Snap.animate(
        40,
        -particleAirtablePathLen,
        (value) => {
          particleAirtablePath.attr({ strokeDashoffset: value });
        },
        500,
        () => {
          Snap.animate(
            50,
            -particleGsheetsPathLen,
            (value) => {
              particleGsheetsPath.attr({ strokeDashoffset: value });
            },
            500,
            () => {
              requestAnimationFrame(animateForGec);
            }
          );
        }
      );
    }
  };

  requestAnimationFrame(animateForGec);
})();
