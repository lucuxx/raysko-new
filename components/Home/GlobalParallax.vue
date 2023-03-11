<!-- <template>
  <div class="global-parallax py-5">
    <b-container class="text-center">
      <div class="scroll-fx-left-in scroll-fx-down-out">
        <h1>1</h1>
      </div>
      <div class="scroll-fx-right-in scroll-fx-down-out">
        <h1>2</h1>
      </div>
      <div class="scroll-fx-left-in scroll-fx-down-out">
        <h1>3</h1>
      </div>
      <div class="scroll-fx-right-in scroll-fx-down-out">
        <h1>4</h1>
        <div class="row">
          <div class="col">
            <h1 class="float-lg-none tc-dim-gray mg-lg h1-bloc-1-style">
              <strong id="btn23k" k-resid="pwtext23"
                >监 控 、 报 警 、 运 维</strong
              ><br /><span class="text-span-color"></span
              ><span id="btn24k" k-resid="pwtext24">样 样 齐 全</span><br />
            </h1>
            <div class="blockquote">
              <p class="mg-lg" id="btn25k" k-resid="pwtext25">
                通过 PowerJob
                前端控制台，您可以轻松监测任务的一举一动，整体运行状态净收眼底。<br />
              </p>
            </div>
            <div class="blockquote" id="btn26k" k-resid="pwtext26">
              <p class="mg-lg">
                此外，PowerJob
                还提供在线日志、在线运维等功能，无论哪一样，都是开发和调试的好帮手。
              </p>
            </div>
          </div>
          <div class="col">
            <img
              src="img/lazyload-ph.png"
              data-src="img/powerjob_section_2.svg"
              class="img-fluid mx-auto d-block img_1 img-bloc-1-style lazyload"
              alt="12"
            />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
let lastScrollTop = 0;
import Heading from "~/components/Heading.vue";
import Btn from "~/components/Button/Button.vue";
export default {
  components: {
    Heading,
    Btn,
  },

  mounted() {
    this.scrollFX();
  },
  methods: {
    scrollFX() {
      var docHeight = $(document).height();
      var windowHeight = $(window).height();

      if (docHeight != windowHeight) {
        // Get Scroll Direction
        var currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        var scrollUp = lastScrollTop > currentScrollTop;
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

        $(
          '[class*="scroll-fx-up-"], [class*="scroll-fx-down-"], [class*="scroll-fx-left-"], [class*="scroll-fx-right-"], [class*="scroll-fx-in-fade"], [class*="scroll-fx-out-fade"], [class*="scroll-fx-zoom-"]'
        ).each(function (i) {
          var targetObj = $(this);
          var windowH = $(window).height();
          var windowMax = $(window).scrollTop() + windowH * 3;

          if (targetObj.offset().top < windowMax) {
            // Only animate when within range
            if (
              !targetObj.hasClass("scroll-fx-in-range") &&
              targetObj.is(
                '[class*="scroll-fx-in-fade"], [class*="scroll-fx-out-fade"]'
              )
            ) {
              // Let processor know element is going to be animated
              targetObj.addClass("scroll-fx-in-range");
            }

            var centerPoint = windowH / 2 - targetObj.outerHeight() / 2;
            var exitPoint = windowH / 2 - targetObj.outerHeight();
            var scrollVal =
              $(window).scrollTop() -
              targetObj.offset().top +
              targetObj.outerHeight() / 100 +
              centerPoint;
            var scrollZoomIn =
              window.scrollY / (targetObj.offset().top - centerPoint);
            var scrollZoomOut =
              (targetObj.offset().top - centerPoint) / window.scrollY;

            var offSetVal = scrollVal / 10;

            var leftVal = offSetVal + "%";
            var rightVal = -offSetVal + "%";
            var opacity = 1 + scrollVal / 250;
            var FXState = "in";

            if (offSetVal > 0 || !targetObj.is('[class*="-in"]')) {
              // Prevent movement when in center of screen
              leftVal = 0;
              rightVal = 0;

              if (offSetVal > 0) {
                // Lock Zooms
                scrollZoomIn = 1;
                scrollZoomOut = 1;
              }

              if (targetObj.is('[class*="-in-fade"],[class*="-out-fade"]')) {
                targetObj.css({ opacity: "1.0" });
              } // Force 1.0 opacity
            }

            if (offSetVal > 30) {
              // Exit Animation
              if (targetObj.is('[class*="-out"]')) {
                FXState = "out";
                leftVal = -Math.abs(offSetVal - 30) + "%";
                rightVal = Math.abs(offSetVal - 30) + "%";
                opacity = 1 - scrollVal / 250 + 0.8;
              }
            }

            // Direction Animate
            var transform = ""; // Default None

            if (targetObj.is('[class*="scroll-fx-left-' + FXState + '"]')) {
              // Left
              transform = "translate3d(" + leftVal + ",0,0)";
            }
            if (targetObj.is('[class*="scroll-fx-right-' + FXState + '"]')) {
              // Right
              transform = "translate3d(" + rightVal + ",0,0)";
            } else if (
              targetObj.is('[class*="scroll-fx-up-' + FXState + '"]')
            ) {
              // Up
              transform = "translate3d(0," + rightVal + ",0)";
            } else if (
              targetObj.is('[class*="scroll-fx-down-' + FXState + '"]')
            ) {
              // Down
              transform = "translate3d(0," + leftVal + ",0)";
            }

            // Scale Animate (Zoom - Push | Pull)
            if (
              targetObj.is(
                '[class*="scroll-fx-zoom-push"], [class*="scroll-fx-zoom-pull"]'
              )
            ) {
              var scrollZoomVal = scrollZoomIn;

              if (targetObj.is('[class*="scroll-fx-zoom-push"]')) {
                // Zoom Out (Push)
                scrollZoomVal = scrollZoomOut;

                if (scrollZoomVal > 2) {
                  // Prevent Zoom Out Being larger than 2x
                  scrollZoomVal = 2;
                } else {
                  // Prevent Jerky Scale
                  var lastScaleVal = targetObj.attr("scroll-fx-last-scale");

                  if (scrollUp) {
                    // Scroll Up
                    if (lastScaleVal > scrollZoomVal) {
                      scrollZoomVal = lastScaleVal;
                    }
                  } else if (scrollZoomVal > lastScaleVal) {
                    // Scroll Down
                    scrollZoomVal = lastScaleVal;
                  }
                }

                targetObj.attr("scroll-fx-last-scale", scrollZoomVal);
              }

              if (
                !targetObj.is(
                  '[class*="scroll-fx-up-"], [class*="scroll-fx-down-"], [class*="scroll-fx-left-"], [class*="scroll-fx-right-"]'
                )
              ) {
                // Prevent X Value
                transform = "scale(" + scrollZoomVal + ")";
              } // Add Scale To X Value
              else {
                transform += "scale(" + scrollZoomVal + ")";
              }
            }

            if (
              !targetObj.hasClass("scroll-fx-" + FXState + "-fade") ||
              targetObj.is('[class*="scroll-fx-zoom-"]')
            ) {
              targetObj.css({ "-webkit-transform": transform });
            } // Add Transform
            if (targetObj.is('[class*="-' + FXState + '-fade"]')) {
              targetObj.css({ opacity: opacity });
            } // Add fade
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.global-parallax {
  background: url("~static/img/home/home1.jpg") center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba($white, 0.5);
    z-index: 0;
  }
  > * {
    z-index: 1;
    position: relative;
  }
}
</style> -->
