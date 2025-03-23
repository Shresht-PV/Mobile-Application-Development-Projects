 <!-- jQuery -->
   <script>
        $(document).ready(function() {
            // Fade In and Fade Out
            $("#fadeBtn").click(function() {
                $("#fadeElement").fadeToggle();
            });

            // Slide Up and Slide Down
            $("#slideBtn").click(function() {
                $("#slideElement").slideToggle();
            });

            // Toggle Class Animation
            $("#toggleBtn").click(function() {
                $("#toggleElement").toggleClass("toggle-style");
            });

            // Animate Element (Move and Resize)
            $("#animateBtn").click(function() {
                $("#animateBox").animate({
                    width: "200px",
                    height: "200px",
                    left: "100px"
                }, 1000);
            });
        });
    </script>