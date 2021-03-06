// Generic JS that is applicable across multiple pages
import './utils/array';
import './utils/paginable';
import './utils/panelHeading';
import './utils/links';
import './utils/tabHelper';
import './utils/tooltipHelper';
import './utils/popoverHelper';

// Page specific JS
import './views/answers/edit';
import './views/answers/rda_metadata';
import './views/contacts/new';
import './views/devise/invitations/edit';
import './views/devise/passwords/edit';
import './views/devise/passwords/new';
import './views/devise/registrations/edit';
import './views/guidance_groups/admin_edit';
import './views/guidance_groups/admin_new';
import './views/guidances/new_edit';
import './views/notes/index';
import './views/org_admin/phases/new_edit';
import './views/org_admin/phases/preview';
import './views/org_admin/question_options/index';
import './views/org_admin/questions/sharedEventHandlers';
import './views/org_admin/sections/index';
import './views/org_admin/templates/edit';
import './views/org_admin/templates/index';
import './views/org_admin/templates/new';
import './views/orgs/admin_edit';

// START DMPTool customization
// ----------------------------------------
// import './views/orgs/shibboleth_ds';
// ----------------------------------------
// END DMPTool customization

import './views/plans/download';
import './views/plans/edit_details';
import './views/plans/index';
import './views/plans/new';
import './views/plans/share';
import './views/roles/edit';
import './views/shared/create_account_form';

// START DMPTool customization
// ----------------------------------------
// import './views/shared/my_org';
// ----------------------------------------
// END DMPTool customization

import './views/shared/sign_in_form';
import './views/super_admin/themes/new_edit';
import './views/super_admin/users/edit';
import './views/usage/index';
import './views/users/notification_preferences';
import './views/users/admin_grant_permissions';
import './views/super_admin/notifications/edit';

// START DMPTool customization
// ----------------------------------------
import './dmptool/add_target_blank';
import './dmptool/views/home/index';
import './dmptool/views/shared/signin_create_form';
// ----------------------------------------
// END DMPTool customization
