import Script from "next/script";
import { useEffect } from "react";

const FiverrWidget = () => {
  useEffect(() => {
    // You can place any additional JS logic here if needed
  }, []);

  return (
    <div>
      {/* Fiverr Seller Widget HTML with dangerouslySetInnerHTML */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div itemscope itemtype="http://schema.org/Person" class="fiverr-seller-widget" style="display: inline-block;">
              <a itemprop="url" href="https://www.fiverr.com/israfilhossainj" rel="nofollow" target="_blank" style="display: inline-block;">
                <div class="fiverr-seller-content" id="fiverr-seller-widget-content-2ada5024-37bb-43f6-9a1e-f21e2275f7a8" itemprop="contentURL" style="display: none;"></div>
                <div id="fiverr-widget-seller-data" style="display: none;">
                  <div itemprop="name">israfilhossainj</div>
                  <div itemscope itemtype="http://schema.org/Organization">
                    <span itemprop="name">Fiverr</span>
                  </div>
                  <div itemprop="jobtitle">Seller</div>
                  <div itemprop="description">
                    Greetings! I'm a highly skilled MERN Stack developer specializing in mobile app development.
                    With a wealth of experience spanning over 3 years, I possess a deep understanding of creating robust web applications and user-friendly mobile apps.
                    My commitment to excellence and unwavering attention to detail ensure that I consistently deliver top-quality solutions, surpassing client expectations.
                    I take pride in my ability to meet deadlines and provide exceptional services that bring projects to life.
                    Let's join! Together, we can transform your ideas into powerful, engaging, and innovative.
                  </div>
                </div>
              </a>
            </div>
          `,
        }}
      />

      {/* Fiverr Seller Widget Script */}
      <Script
        id="fiverr-seller-widget-script-2ada5024-37bb-43f6-9a1e-f21e2275f7a8"
        src="https://widgets.fiverr.com/api/v1/seller/israfilhossainj?widget_id=2ada5024-37bb-43f6-9a1e-f21e2275f7a8"
        data-config='{"category_name":"Programming \u0026 Tech"}'
        async
        defer
      />
    </div>
  );
};

export default FiverrWidget;
