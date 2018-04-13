var pageComponent=webpackJsonppageComponent([7],{148:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),d=o(i),s=n(1),c=o(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11);var u=n(149),p=o(u),m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(d.default);c.default.register(m,p.default),t.default=m},149:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.ipiRM=void 0;var i,d=n(0),s=o(d),c=n(1),u=o(c);goog.loadModule(function(e){function t(e,t,o){var i=function(){a("article",null,null,"id","before-after"),a("h3"),d("How does it look like now (7.0)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_creation_menu_old.png"),r("img"),r("p"),a("h3"),d("Changes for Lexicon 2.0 (7.1)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_creation_menu_new.png"),r("img"),r("p"),a("table"),a("thead"),a("tr"),a("th"),d("Change"),r("th"),a("th"),d("Reason"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),d("① Add Menu is now part of the Management Toolbar"),r("td"),a("td"),d("See "),a("a",null,null,"href","../add_menu.html"),d("Add Menu"),r("a"),d("."),r("td"),r("tr"),r("tbody"),r("table"),r("article"),a("article",null,null,"id","management-toolbar-with-creation-menu"),a("h4"),d("How to apply it?"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),d("_"),r("th"),a("th"),d("Action"),r("th"),a("th"),d("Mandatory"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("a",null,null,"href","#step-1"),d("1"),r("a"),r("td"),a("td"),d("Locate the code in your application"),r("td"),a("td"),d("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-2"),d("2"),r("a"),r("td"),a("td"),d("Use "),a("code"),d("clay:management-toolbar"),r("code"),d(" instead of the old "),a("code"),d("liferay-frontend:management-bar"),r("code"),d(" tag"),r("td"),a("td"),d("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-3"),d("3"),r("a"),r("td"),a("td"),d("Move the creation menu definition into a Display Context"),r("td"),a("td"),d("✘"),r("td"),r("tr"),r("tbody"),r("table"),a("h3"),d("[1] Locate the code in your application "),l("a",null,null,"id","step-1"),r("h3"),a("p"),d("Locate the code responsible for rendering the "),a("strong"),d("management-bar"),r("strong"),d(" in your application. It should resemble something like the following snippet found in "),a("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/fe9dfcc0275660a0fe9aafb50ae6b169236f67cf/modules/apps/web-experience/asset/asset-tags-admin-web/src/main/resources/META-INF/resources/view.jsp#L28"),d("asset-tags-admin-web/view.jsp"),r("a"),d(":"),r("p"),s({code:'<liferay-frontend:management-bar\n    disabled="<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>"\n    includeCheckBox="<%= true %>"\n    searchContainerId="assetTags"\n>\n    ...\n\n    <liferay-frontend:management-bar-buttons>\n        ...\n\n        <c:if test="<%= assetTagsDisplayContext.isShowAddButton() %>">\n            <portlet:renderURL var="editTagURL">\n                <portlet:param name="mvcPath" value="/edit_tag.jsp" />\n            </portlet:renderURL>\n\n            <liferay-frontend:add-menu\n                inline="<%= true %>"\n            >\n                <liferay-frontend:add-menu-item\n                    title=\'<%= LanguageUtil.get(request, "add-tag") %>\'\n                    url="<%= editTagURL.toString() %>"\n                />\n            </liferay-frontend:add-menu>\n        </c:if>\n    </liferay-frontend:management-bar-buttons>\n...\n\n</liferay-frontend:management-bar>',mode:"text/html"},null,o),a("h3"),d("[2] Use "),a("code"),d("clay:management-toolbar"),r("code"),d(" instead of the old "),a("code"),d("liferay-frontend:management-bar"),r("code"),d(" tag "),l("a",null,null,"id","step-2"),r("h3"),a("p"),d("Start by adding the following imports to the imports section of your "),a("code"),d("init.jsp"),r("code"),d(" file:"),r("p"),s({code:'// Import the clay tld file to be able to use the new tag\n<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>\n\n// Import the CreationMenu utility class to create the creation menu model\n<%@ page import="com.liferay.frontend.taglib.clay.servlet.taglib.util.JSPCreationMenu" %>',mode:"text/html"},null,o),a("p"),d("Don't forget to add the dependencies with to the "),a("code"),d("frontend-taglib-clay"),r("code"),d(" and "),a("code"),d("fronteng.taglib.soy"),r("code"),d(" module in your "),a("code"),d("build.gradle"),r("code"),d(" file:"),r("p"),s({code:'compileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-clay")\ncompileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-soy")',mode:"text/html"},null,o),a("h4"),d("Implement the new taglib"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),d("Parameter"),r("th"),a("th"),d("Description"),r("th"),a("th"),d("Default"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("code"),d("creationMenu"),r("code"),r("td"),a("td"),d("Is the list of dropdownItems to show in the creation menu. If only one item is present add button will be a link instead a dropdown."),r("td"),a("td"),d("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("disabled"),r("code"),r("td"),a("td");d("To disable or not the management toolbar. Usually should be disabled when there're no results"),r("td"),a("td"),d("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("namespace"),r("code"),r("td"),a("td"),d("If passed the params "),a("code"),d("infoPanelId"),r("code"),d(", "),a("code"),d("searchFormName"),r("code"),d(", "),a("code"),d("searchInputName"),r("code"),d(" and "),a("code"),d("searchContainerId"),r("code"),d(" will be automatically namespaced."),r("td"),a("td"),d("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("selectable"),r("code"),r("td"),a("td"),d("To show or not the checkbox to interact with the dataset. Previous "),a("code"),d("includeCheckBox"),r("code"),d("."),r("td"),a("td"),a("code"),d("true"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("showCreationMenu"),r("code"),r("td"),a("td"),d("To show or not the add content button."),r("td"),a("td"),d("If "),a("code"),d("creationMenu"),r("code"),d(" != null "),a("code"),d("true"),r("code"),d(" else "),a("code"),d("false"),r("code"),d("."),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("totalItems"),r("code"),r("td"),a("td"),d("Is the total number of items that appears in the dataset to reflect it in the results bar and in the active state."),r("td"),a("td"),d("_"),r("td"),r("tr"),r("tbody"),r("table"),s({code:'<clay:management-toolbar\n    creationMenu="<%= \n        new JSPCreationMenu(pageContext) {\n            {\n                addPrimaryDropdownItem(\n                    dropdownItem -> {\n                        dropdownItem.setHref(\n                            _renderResponse.createRenderURL(), "mvcPath",\n                            "/edit_tag.jsp");\n                        dropdownItem.setLabel("add-tag");\n                    });\n            }\n        }\n    %>"\n    disabled="<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>"\n    namespace="<%= renderResponse.getNamespace() %>"\n    selectable="<%= false %>"\n    showCreationMenu="<%= assetTagsDisplayContext.isShowAddButton() %>"\n    totalItems="<%= assetTagsDisplayContext.getTotalItems() %>"\n/>',mode:"text/html"},null,o),a("h3"),d("[3] Move the definitions into a Display Context "),l("a",null,null,"id","step-3"),r("h3"),a("div",null,null,"class","alert alert-info"),d("This step is "),a("em"),d("optional"),r("em"),d(" but "),a("strong"),d("recommended"),r("strong"),r("div"),a("p"),d("If your application already supports it (or even if it doesn't), consider moving the "),a("code"),d("Java"),r("code"),d(" portion that generates the navigation items model into a "),a("code"),d("*DisplayContext"),r("code"),d(" pattern to keep your jsps cleaner and server-free"),r("p"),s({code:'<clay:management-toolbar\n    creationMenu="<%= assetTagsDisplayContext.getCreationMenu() %>"\n    disabled="<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>\n    namespace="<%= renderResponse.getNamespace() %>"\n    selectable="<%= true %>"\n    showCreationMenu="<%= assetTagsDisplayContext.isShowAddButton() %>"\n    totalItems="<%= assetTagsDisplayContext.getTotalItems() %>"\n/>',mode:"text/html"},null,o),r("article"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};c(n.$$assignDefaults({content:i},e),null,o)}goog.module("ipiRM.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),a=o.elementOpen,r=o.elementClose,l=o.elementVoid,d=(o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,u.default.getTemplate("ElectricCode.incrementaldom","render")),c=u.default.getTemplate("lexiconMigrationGuide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="ipiRM.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var p=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(s.default);u.default.register(p,i),t.ipiRM=p,t.templates=i,t.default=i}},[148]);