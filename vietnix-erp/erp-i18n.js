/* Page copy only: exported product screenshots intentionally retain their source language. */
(() => {
  const pairs = [
    ['Vai trò','My role'],['Bối cảnh','Context'],['Màn hình','Screens'],['Thời gian','Timeline'],['Nhóm','Team'],['1 designer, 4 dev','1 designer, 4 developers'],
    ['Dự án tập trung vào tái cấu trúc toàn diện và chuyển đổi nền tảng cho Vietnix, nhằm thay thế WHMCS bằng hệ thống ERP tự xây dựng.','A comprehensive platform migration and redesign for Vietnix, replacing WHMCS with a custom-built ERP system.'],
    ['Đây là bài toán thiết kế chịu ràng buộc về','This design challenge was shaped by'],
    [', không đơn thuần là thay đổi giao diện. Hệ thống mới đồng thời tối ưu trải nghiệm',', not just a visual refresh. The new system improves the experience of the'],
    ['và hiệu suất vận hành','and the operational efficiency of the'],
    [', đồng thời duy trì tư duy quen thuộc để đảm bảo quá trình chuyển giao liền mạch.',', while preserving familiar mental models to support a smooth transition.'],
    ['01 - Vai trò','01 - My role'],['Mình đã làm những gì','My contribution'],
    ['Là UX/UI Product Designer duy nhất trong team, chịu trách nhiệm toàn bộ trải nghiệm người dùng, từ nghiên cứu, thiết kế giao diện, xây dựng Design System đến bàn giao cho developer.','As the sole UX/UI Product Designer on the team, I owned the end-to-end user experience, from research and interface design to building the design system and developer handoff.'],
    ['Hệ thống (Client + Admin Portal)','Systems (Client + Admin Portal)'],['Dùng chung một bộ giao diện','One shared design language'],['Nhóm dịch vụ','Service categories'],['Màn hình đã thiết kế','Screens designed'],
    ['Xây dựng bộ Design System từ đầu','Built the design system from scratch'],['- bộ quy chuẩn dùng chung giữ cho toàn bộ sản phẩm nhất quán.','- shared standards that keep the entire product consistent.'],
    ['Thiết kế giao diện end-to-end cho toàn bộ dự án','Designed end-to-end interfaces across the project'],['Chuẩn hoá các mẫu design patterns','Standardized reusable design patterns'],['Ứng dụng AI vào quy trình thiết kế','Integrated AI into the design workflow'],['- dùng Figma API/MCP và script tự động để áp design token, dựng màn hình và giữ tính nhất quán.','- using Figma API/MCP and automation scripts to apply design tokens, build screens, and maintain consistency.'],
    ['02 - Bối cảnh','02 - Context'],['Từ nền tảng mua sẵn sang','From an off-the-shelf platform'],['hệ thống tự xây dựng','to a custom-built system'],['Vấn đề','Problem'],['Bài toán đặt ra','The challenge'],
    ['Vietnix sử dụng WHMCS - một nền tảng quản lý hosting sẵn có nhưng bộc lộ nhiều giới hạn: khó tùy biến, UX chưa tối ưu cho khách hàng Việt Nam và hạn chế khả năng tích hợp và mở rộng.','Vietnix used WHMCS, an off-the-shelf hosting management platform with growing limitations: limited customization, a user experience poorly suited to Vietnamese customers, and constraints on integration and scalability.'],
    ['Xây dựng một hệ thống ERP hosting độc quyền, thực hiện migration toàn bộ dữ liệu của hàng chục nghìn khách hàng, đồng thời nâng cao hiệu suất vận hành cho team Admin và trải nghiệm quản lý cho Client.','Build a proprietary hosting ERP, migrate all data for tens of thousands of customers, and improve both the Admin team’s operational efficiency and the Client management experience.'],
    ['Hệ thống WHMCS cũ','Previous WHMCS system'],['Hệ thống Vietnix ERP mới','New Vietnix ERP system'],['03 - Nền tảng thiết kế','03 - Design foundation'],
    ['Xây dựng hệ thống màu theo Design Token, cho phép giao diện linh hoạt chuyển đổi giữa các Brand Theme và Light/Dark Mode. Thay vì thiết lập màu trực tiếp trên từng component, toàn bộ giao diện được quản lý thông qua các token ngữ nghĩa, giúp đảm bảo tính nhất quán, dễ mở rộng và cập nhật theme trên toàn hệ thống.','I built a token-based color system that supports multiple brand themes and light/dark modes. Rather than hard-coding colors in individual components, semantic tokens manage the entire interface, ensuring consistency and making themes easier to scale and update across the system.'],
    ['Từ những mảnh giao diện rời rạc thành một hệ thống có thể mở rộng','From fragmented interfaces to a scalable system'],['Từ token đến màn hình thật','From tokens to real screens'],['Từ những giá trị nền tảng đến một giao diện hoàn chỉnh.','From foundational values to a complete interface.'],
    ['Foundation được xây dựng từ Token → Component → Pattern, tạo thành một hệ thống thống nhất để các màn hình mới có thể được lắp ghép nhanh chóng, nhất quán và dễ mở rộng.','The foundation follows Token → Component → Pattern, creating a unified system for assembling new screens quickly, consistently, and at scale.'],
    ['Mọi màu sắc, kiểu chữ, khoảng cách và hiệu ứng đều được định nghĩa thành token. Không sử dụng giá trị trực tiếp, giúp hệ thống dễ thay đổi, đồng bộ và mở rộng.','Every color, type style, spacing value, and effect is defined as a token. Avoiding hard-coded values makes the system easier to update, keep consistent, and scale.'],
    ['30 text style · 39 effect','30 text styles · 39 effects'],['148 component set · 1.634 variant','148 component sets · 1,634 variants'],
    ['Từ các token nền tảng, xây dựng thành những component có thể tái sử dụng và kết hợp linh hoạt, với đầy đủ variant và trạng thái tương tác.','Foundational tokens become reusable, composable components, complete with variants and interaction states.'],
    ['Các component được kết hợp thành những pattern chuẩn hóa, giúp tái sử dụng các cấu trúc quen thuộc và rút ngắn thời gian thiết kế màn hình mới.','Components combine into standardized patterns, reusing familiar structures and reducing the time needed to design new screens.'],['5 khuôn chuẩn hoá','5 standardized patterns'],
    ['Từ cùng một Design System, các màn hình được triển khai cho hai hệ thống và hai nhóm người dùng khác nhau, nhưng vẫn duy trì một ngôn ngữ thiết kế nhất quán.','One design system supports two platforms and two user groups, while maintaining a consistent design language.'],['100+ màn hình · 2 hệ thống','100+ screens · 2 systems'],['Khách hàng','Client'],
    ['Gia hạn','Renew'],['Huỷ','Cancel'],['Xem chi tiết','View details'],['Đã khoá','Locked'],['Đang kiểm tra','Checking'],['Chọn một hành động để xem trạng thái component.','Choose an action to explore component states.'],
    ['Đã chọn gia hạn','Renewal selected'],['Primary action đã chuyển sang trạng thái hoàn tất.','The primary action is now complete.'],['Trạng thái component đã được đặt lại.','Component states have been reset.'],['Đã thu gọn thông tin chi tiết.','Details collapsed.'],['Chi tiết: tên miền vietnix.vn · trạng thái đang hoạt động.','Details: domain vietnix.vn · status active.'],['Giá trị cần có ít nhất 3 ký tự.','Enter at least 3 characters.'],['Field đã chuyển từ error sang valid.','The field is now valid.'],
    ['Quy trình làm việc','My workflow'],['Áp dụng AI vào quy trình làm việc, AI không thay thế tư duy thiết kế. Mình tập trung vào việc hiểu vấn đề, đưa ra quyết định và kiểm chứng giải pháp.','AI supports my workflow without replacing design thinking. I focus on understanding problems, making decisions, and validating solutions.'],['Số bước:','Steps:'],
    ['Bước 01','Step 01'],['Bước 02','Step 02'],['Bước 03','Step 03'],['Bước 04','Step 04'],['Làm rõ yêu cầu','Clarify requirements'],['Thiết kế giải pháp','Design the solution'],['Review & Hỗ trợ triển khai','Review & support implementation'],['Kiểm tra & Cải tiến','Test & improve'],
    ['Đọc và phân tích tài liệu nghiệp vụ, làm rõ business logic, user role và các trường hợp đặc biệt. Phân tích hệ thống hiện tại, xác định các trường hợp đặc biệt và chia nhỏ phạm vi thiết kế để hiểu cách người dùng đang thực hiện công việc và xác định điểm cần cải thiện.','Review business documentation to clarify business logic, user roles, and edge cases. Analyze the existing system and break down the design scope to understand how people work today and identify opportunities for improvement.'],
    ['Kết nối AI với tài liệu qua MCP để hỗ trợ phân tích yêu cầu và gợi ý các tình huống cần làm rõ.','Connect AI to documentation through MCP to support requirements analysis and surface scenarios that need clarification.'],
    ['Chuyển yêu cầu thành user flow và prototype có thể tương tác. Trao đổi sớm với team về tính khả thi, hoàn thiện các trạng thái và tương tác cần thiết trước khi review phương án cùng team.','Turn requirements into user flows and interactive prototypes. Discuss feasibility with the team early, then refine the necessary states and interactions before reviewing the proposed solution together.'],
    ['Dựng prototype chạy được để cả team có thể trực tiếp trải nghiệm và phản hồi.','Build working prototypes so the whole team can experience the solution and provide feedback.'],
    ['Trình bày phương án qua prototype tương tác được xây dựng với sự hỗ trợ của AI, giúp team trải nghiệm luồng thao tác và phản hồi cụ thể. Cập nhật Figma, bổ sung ghi chú xử lý và phối hợp với Development để giải đáp, điều chỉnh trong quá trình triển khai.','Present the solution through AI-assisted interactive prototypes so the team can try the flows and give specific feedback. Update Figma, add implementation notes, and work with Development to answer questions and refine details during implementation.'],
    ['Kiểm tra từng phần đã triển khai trên staging về giao diện, tương tác, responsive và các trường hợp đặc biệt. Phối hợp xử lý sai lệch theo tiêu chí đã thống nhất; tiếp nhận phản hồi từ Sprint Review để đề xuất cải tiến cho backlog.','Test each implemented feature on staging for visual accuracy, interactions, responsiveness, and edge cases. Work with the team to resolve deviations against agreed criteria, and turn Sprint Review feedback into improvement proposals for the backlog.'],
    ['AI giúp tăng tốc quá trình nhưng không nắm phần quyết định.','AI accelerates the process, but does not make the decisions.'],
    ['AI giúp mình đọc nhanh hơn, dựng nhanh hơn và khám phá nhiều phương án hơn. Nhưng quyết định sản phẩm về flow, structure, usability và những gì cần phản biện vẫn là trách nhiệm của mình.','AI helps me read faster, build faster, and explore more options. But product decisions about flows, structure, usability, and what needs to be challenged remain my responsibility.'],
    ['Ba kỹ năng qua ba cải tiến UX','Three skills, three UX improvements'],['Ba ví dụ cho thấy cách mình đưa thông tin vào đúng ngữ cảnh, phản hồi đúng thời điểm và kiểm soát mức độ phức tạp trong hệ thống ERP.','Three examples of how I place information in context, provide timely feedback, and manage complexity in an ERP system.'],
    ['Thiết kế thông tin theo đúng ngữ cảnh','Designing information in context'],['Một người dùng có thể làm việc trong nhiều tổ chức với vai trò khác nhau.','A user may work across multiple organizations with different roles.'],['Tuy nhiên, hệ thống cũ chỉ làm rõ danh tính đăng nhập mà không thể hiện tài khoản đang quyết định dữ liệu và quyền thao tác.','However, the old system only showed the signed-in identity, not the account determining the available data and permissions.'],
    ['Danh tính cá nhân và ngữ cảnh tổ chức bị gộp chung, khiến người dùng khó nhận biết mình đang thao tác trong tài khoản nào.','Personal identity and organizational context were combined, making it difficult to tell which account was currently in use.'],['Giải pháp','Solution'],['Tách Account Selector khỏi avatar, luôn hiển thị tổ chức hiện tại và cho phép chuyển đổi ngay tại chỗ.','Separate the Account Selector from the avatar, keep the current organization visible, and allow switching without leaving the page.'],
    ['Quyết định UX','UX decisions'],['Hiển thị vai trò','Show the user’s role'],['Badge Chủ sở hữu hoặc Thành viên giúp người dùng hiểu quyền của mình trước khi chuyển.','Owner and Member badges clarify permissions before switching accounts.'],['Đánh dấu trạng thái hiện tại','Mark the active account'],['Dấu tích xác nhận ngay tài khoản đang hoạt động, không buộc người dùng phải suy đoán.','A checkmark identifies the active account immediately, without making users guess.'],['Ẩn khi không cần thiết','Hide when unnecessary'],['Account Selector không xuất hiện nếu người dùng chỉ có một tài khoản.','The Account Selector stays hidden when a user has only one account.'],
    ['Trước','Before'],['Sau','After'],['Kết quả','Outcome'],['Ngữ cảnh làm việc bị ẩn','Working context is hidden'],['Người dùng phải rời trang hiện tại để chuyển tài khoản và không thấy tài khoản nào đang được chọn.','Users must leave the current page to switch accounts and cannot see which account is selected.'],['Danh tính và ngữ cảnh được tách rõ','Identity and context are distinct'],['Account Selector luôn hiển thị tổ chức hiện tại; avatar chỉ còn thông tin cá nhân, bảo mật và đăng xuất.','The Account Selector always shows the current organization; the avatar menu contains only personal information, security, and sign-out options.'],
    ['Thông tin ảnh hưởng đến thao tác cần được nhìn thấy. Sự phức tạp chỉ nên xuất hiện khi thực sự cần thiết.','Information that affects an action must be visible. Complexity should appear only when it is truly needed.'],
    ['Thiết kế phản hồi giúp người dùng kiểm soát thao tác','Designing feedback that gives users control'],
    ['Trong màn hình admin, nhân viên chủ yếu xem thông tin và chỉ chỉnh sửa một vài trường. Tách riêng màn xem và sửa gây thêm thao tác, còn cho phép chỉnh sửa mọi lúc lại khiến trạng thái thay đổi khó nhận biết.','On admin screens, staff mostly review information and edit only a few fields. Separate view and edit screens add steps, while always-editable fields make changes difficult to track.'],
    ['Tách riêng màn xem và màn sửa làm tăng số bước; chỉnh sửa mọi lúc lại khiến người dùng khó biết trường nào đã đổi, có bao nhiêu thay đổi và dữ liệu đã được lưu hay chưa.','Separate view and edit screens add steps. Always-on editing makes it hard to tell which fields have changed, how many changes exist, and whether they have been saved.'],
    ['Khi người dùng thay đổi dữ liệu, hệ thống kích hoạt dirty state để làm rõ trường đã chỉnh sửa, đồng thời hiển thị sticky action bar với số lượng thay đổi và các hành động Lưu / Hủy.','When data changes, a dirty state highlights the edited fields, while a sticky action bar shows the change count and Save / Cancel actions.'],
    ['Phản hồi đúng nơi, đúng lúc','Feedback where and when it matters'],['Trạng thái xuất hiện ngay cạnh trường vừa sửa; nút Lưu chỉ khả dụng khi dữ liệu thực sự thay đổi.','Status appears beside the edited field; Save is enabled only when data has actually changed.'],['Giữ tín hiệu ở mức nhẹ','Keep visual cues subtle'],['Chỉ thay đổi label và thêm chấm trạng thái, tránh tô màu toàn bộ field hoặc card gây nhiễu thị giác.','Update the label and add a status dot instead of coloring the entire field or card, reducing visual noise.'],['Bảo vệ thay đổi chưa lưu','Protect unsaved changes'],['Nút Lưu và Hủy luôn trong tầm nhìn; hệ thống cảnh báo nếu người dùng rời trang khi còn dữ liệu chưa lưu.','Save and Cancel remain visible, and the system warns users before they leave with unsaved changes.'],
    ['Trạng thái thay đổi khó nhận biết','Changes are difficult to recognize'],['Người dùng có thể chỉnh sửa trực tiếp, nhưng khó biết trường nào đã thay đổi và cần thực hiện thao tác gì tiếp theo.','Users can edit directly, but struggle to identify changed fields and the next action to take.'],['Trạng thái thay đổi luôn được nhìn thấy','Changes remain visible'],['Khi có thay đổi, dirty state và sticky action bar xuất hiện để làm rõ trạng thái và hành động tiếp theo.','When data changes, a dirty state and sticky action bar clarify the current status and next actions.'],['Mọi thay đổi cần có phản hồi rõ ràng. Hành động quan trọng cần xuất hiện đúng lúc, không phải mọi lúc.','Every change needs clear feedback. Important actions should appear at the right time, not all the time.'],
    ['Tổ chức trải nghiệm khi dữ liệu trở nên phức tạp','Structuring the experience around complex data'],['Trong ERP, người dùng thường phải xử lý nhiều dữ liệu dù chỉ cần kiểm tra hoặc chỉnh sửa một vài trường. Ví dụ, form tạo khách hàng có đến 54 trường, khiến những tác vụ đơn giản cũng trở nên phức tạp.','ERP users often face large amounts of data when they only need to review or edit a few fields. For example, the customer creation form had 54 fields, making even simple tasks feel complex.'],['Thông tin thường dùng, dữ liệu chuyên sâu và thiết lập hệ thống có cùng mức ưu tiên trong một biểu mẫu dài.','Frequently used information, advanced data, and system settings all had equal priority in one long form.'],['Chia trải nghiệm thành hai lớp: Thông tin chung để đọc nhanh và Hồ sơ đầy đủ với bảy nhóm chỉ mở khi cần xem hay chỉnh sửa.','Split the experience into two layers: a quick overview and a full profile with seven groups that open only when needed for viewing or editing.'],['Thu gọn nội dung ít dùng','Collapse less-used content'],['Các nhóm phụ sử dụng progressive disclosure để giảm tải nhận thức.','Secondary groups use progressive disclosure to reduce cognitive load.'],['Form phản ánh cấu trúc dữ liệu','A form shaped by the data structure'],['Thông tin thường dùng, ít dùng và thiết lập hệ thống xuất hiện với mức độ ưu tiên như nhau.','Frequently used information, less-used data, and system settings all receive equal emphasis.'],['Form được tổ chức theo nhiệm vụ','A form organized around tasks'],['Thông tin chung hỗ trợ đọc nhanh; hồ sơ đầy đủ chỉ mở nhóm dữ liệu người dùng cần xem hay chỉnh sửa.','The overview supports quick scanning; the full profile opens only the data groups users need to view or edit.'],['Dữ liệu phức tạp không nhất thiết phải bị loại bỏ. Quan trọng là chỉ đưa sự phức tạp ra khi người dùng cần đến nó.','Complex data does not necessarily need to be removed. What matters is revealing complexity only when users need it.'],
    ['06 - Màn hình','06 - Screens'],['Hệ thống trong thực tế','The system in action'],['Hai hệ thống phục vụ hai nhóm người dùng khác nhau, nhưng dựng từ cùng bộ design system','Two systems serving two different user groups, built on one shared design system'],['Trang admin','Admin portal'],['Trang client','Client portal'],
    ['Điều hướng case study','Case study navigation'],['Mở menu','Open menu'],['Laptop hiển thị dashboard Vietnix ERP','Laptop displaying the Vietnix ERP dashboard'],['Giao diện WHMCS cũ','Previous WHMCS interface'],['Giao diện Vietnix ERP mới trên laptop','New Vietnix ERP interface on a laptop'],['Tổng quan Design System hỗ trợ token, Light Dark mode và nhiều brand theme','Design system overview with tokens, light/dark modes, and multiple brand themes'],['Ví dụ variant và trạng thái của component','Component variants and states'],['Tên miền dạng placeholder','Domain placeholder'],['Tên miền có thể chỉnh sửa','Editable domain'],['Field bị khoá','Disabled field'],['Field có lỗi','Invalid field'],['Minh hoạ các pattern giao diện','Interface pattern examples'],['Minh hoạ màn hình khách hàng và quản trị','Client and admin screen examples'],['Màn hình Theme & Plugin trên Client Portal','Theme & Plugin screen in the Client Portal'],['Màn hình Quản lý Download trên Admin Portal','Download Manager screen in the Admin Portal'],['Prototype ERP trong bước thiết kế giải pháp','ERP prototype during solution design'],['Kiểm tra và cải tiến sản phẩm ERP trên staging','Testing and improving the ERP on staging'],['Giao diện chuyển đổi tài khoản trước cải tiến','Account switching before the redesign'],['Account Selector sau cải tiến','Account Selector after the redesign'],['Biểu mẫu dài trước khi tổ chức lại','Long form before restructuring'],['Biểu mẫu được tổ chức theo nhiệm vụ','Task-oriented form'],['Các màn hình giao diện của hệ thống','System interface screens'],['Đóng ảnh xem trước','Close image preview'],['Màn hình trước','Previous screen'],['Màn hình tiếp theo','Next screen']
  ];
  pairs.push(
    ['Thông tin khách hàng','Customer information'],['Hồ sơ khách hàng','Customer profile'],['Tổng quan dịch vụ','Service overview'],['Chi tiết tài nguyên','Resource details'],['Danh sách dịch vụ','Service list'],['Danh sách khách hàng','Customer list'],['Yêu cầu hỗ trợ','Support requests'],
    ['Trạng thái chỉnh sửa trước cải tiến','Editing state before the redesign'],['Dirty state và sticky action bar sau cải tiến','Dirty state and sticky action bar after the redesign'],
    ['Màn hình thông tin khách hàng','Customer information screen'],['Màn hình hồ sơ khách hàng','Customer profile screen'],['Màn hình dịch vụ VPS NVMe','VPS NVMe service screen'],['Màn hình tổng quan dịch vụ','Service overview screen'],['Màn hình quản lý Theme và Plugin','Theme and Plugin management screen'],['Màn hình chi tiết tài nguyên','Resource details screen'],['Màn hình danh sách dịch vụ','Service list screen'],['Màn hình danh sách khách hàng','Customer list screen'],['Màn hình chi tiết yêu cầu hỗ trợ','Support request details screen'],['Màn hình dịch vụ VPS Premium','VPS Premium service screen']
  );
  for (let n=1;n<=10;n++) {
    const id=String(n).padStart(2,'0');
    pairs.push([`Màn hình hệ thống ${id}`,`System screen ${id}`],[`Màn hình ${id}`,`Screen ${id}`]);
  }
  const en = new Map(pairs), vi = new Map(pairs.map(([a,b]) => [b,a]));
  const originals = new WeakMap();
  let language = 'vi';
  const translate = value => {
    const key = value.trim();
    const source = vi.get(key) || key;
    const translated = language === 'en' ? (en.get(source) || source) : source;
    return value.replace(key, translated);
  };
  window.erpTranslate = translate;
  const nav = document.querySelector('.nav-inner');
  const switcher = document.createElement('div');
  switcher.className = 'language-switch';
  switcher.setAttribute('role', 'group');
  switcher.setAttribute('aria-label', 'Ngôn ngữ / Language');
  switcher.innerHTML = '<button type="button" lang="vi" data-language="vi" aria-label="Tiếng Việt" aria-pressed="true">VI</button><button type="button" lang="en" data-language="en" aria-label="English" aria-pressed="false">EN</button>';
  nav.insertBefore(switcher, nav.querySelector('.menu'));
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: node => node.parentElement.closest('script,style,.language-switch') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue.trim()) {
        let record = originals.get(node);
        if (!record || node.nodeValue !== record.last) record = {source:node.nodeValue};
        node.nodeValue = next === 'en' ? translate(record.source) : record.source;
        record.last = node.nodeValue;
        originals.set(node,record);
      }
    }
    document.querySelectorAll('[alt],[aria-label],[data-title]').forEach(el => {
      if (el.closest('.language-switch')) return;
      ['alt','aria-label','data-title'].forEach(attr => {
        if (el.hasAttribute(attr)) {
          let record = originals.get(el) || {};
          if (!(attr in record)) record[attr] = el.getAttribute(attr);
          el.setAttribute(attr, next === 'en' ? translate(record[attr]) : record[attr]);
          originals.set(el,record);
        }
      });
    });
    const locked = document.querySelector('input.demo-field:disabled');
    if (locked) locked.value = translate(locked.value);
    document.querySelectorAll('.nav-links a').forEach(a => a.dataset.motionLabel = a.textContent.trim());
    switcher.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
  }
  switcher.addEventListener('click', event => {
    const button = event.target.closest('[data-language]');
    if (button) setLanguage(button.dataset.language);
  });
  setLanguage('vi');
  const demo = document.querySelector('.component-visual');
  if (demo) new MutationObserver(() => {
    if (language !== 'en') return;
    demo.querySelectorAll('.demo-feedback,[data-demo-action]').forEach(el => {
      const value = el.textContent, translated = translate(value);
      if (translated !== value) {
        const node = el.firstChild;
        if (node && node.nodeType === Node.TEXT_NODE) {
          originals.set(node,{source:value,last:translated});
          node.nodeValue = translated;
        }
      }
    });
  }).observe(demo,{subtree:true,childList:true,characterData:true});
})();
