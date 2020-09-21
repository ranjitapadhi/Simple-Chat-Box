import React from 'react';
import { Route, Switch } from 'react-router-dom';

/*import NavigationNavPage from '../src/Pages/NavigationNavPage';
import FormsNavPage from '../src/Pages/FormsNavPage';
import TablesNavPage from '../src/Pages/TablesNavPage';
import AddonsNavPage from '../src/Pages/AddonsNavPage';
import ModalsNavPage from '../src/Pages/ModalsNavPage';
import AdvancedNavPage from '../src/Pages/AdvancedNavPage';
import ComponentsNavPage from '../src/Pages/ComponentsNavPage';

// FREE
import AnimationPage from '../src/Pages/AnimationPage';
import AlertPage from '../src/Pages/AlertPage';
import HomePage from '../src/Pages/HomePage';
import ButtonPage from '../src/Pages/ButtonPage';
import CSSNavPage from '../src/Pages/CSSNavPage';
import TablePage from '../src/Pages/TablePage';
import TableResponsivePage from '../src/Pages/TableResponsivePage';
import TableScrollPage from '../src/Pages/TableScrollPage';
import TableStylesPage from '../src/Pages/TableStylesPage';
import BadgePage from '../src/Pages/BadgePage';
import BreadcrumbPage from '../src/Pages/BreadcrumbPage';
import FaPage from '../src/Pages/FaPage';
import DatatablePage from '../src/Pages/DatatablePage';
import DatatablePageV5 from '../src/Pages/DatatablePage-2';
import DatatableApiPage from '../src/Pages/DatatableApiPage';
import ModalPage from '../src/Pages/ModalPage';
import ModalFormPage from '../src/Pages/ModalFormPage';
import ModalExamplesPage from '../src/Pages/ModalExamplesPage';
import ProgressPage from '../src/Pages/ProgressPage';
import InputPage from '../src/Pages/InputPage';
import MediaPage from '../src/Pages/MediaPage';
import JumbotronPage from '../src/Pages/JumbotronPage';
import CardsPage from '../src/Pages/CardsPage';
import PaginationPage from '../src/Pages/PaginationPage';
import PopoverPage from '../src/Pages/PopoverPage';
import ListGroupPage from '../src/Pages/ListGroupPage';
import CarouselPage from '../src/Pages/CarouselPage';
import PanelPage from '../src/Pages/PanelPage';
import CollapsePage from '../src/Pages/CollapsePage';
import TooltipsPage from '../src/Pages/TooltipsPage';
import FooterPage from '../src/Pages/FooterPage';
import MasksPage from '../src/Pages/MasksPage';
import DropdownPage from '../src/Pages/DropdownPage';
import VideoCarouselPage from '../src/Pages/VideoCarouselPage';
import HoverPage from '../src/Pages/HoverPage';
import FormsPage from '../src/Pages/FormsPage';
import ChartsPage from '../src/Pages/ChartsPage';
import SearchPage from '../src/Pages/SearchPage';
import ValidationPage from '../src/Pages/ValidationPage';
import NavbarPage from '../src/Pages/NavbarPage';
import IframePage from '../src/Pages/IframePage';
import EdgeHeaderPage from '../src/Pages/EdgeHeaderPage';
import SpinnerPage from '../src/Pages/SpinnerPage';
import MasonryPage from '../src/Pages/MasonryPage';
import ScrollBarPage from '../src/Pages/ScrollBarPage';
import NavsPage from '../src/Pages/NavsPage';
import TabsPage from '../src/Pages/TabsPage';
import PillsPage from '../src/Pages/PillsPage';
import NotificationPage from '../src/Pages/NotificationPage';
import InputGroupPage from '../src/Pages/InputGroupPage';
import TreeviewPage from '../src/Pages/TreeviewPage';
import RatingPage from '../src/Pages/RatingPage';*/



class Routes extends React.Component {
  render() {
    return (/*
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/addons' component={AddonsNavPage} />
        <Route exact path='/advanced' component={AdvancedNavPage} />
        <Route exact path='/components' component={ComponentsNavPage} />
        <Route exact path='/css' component={CSSNavPage} />
        <Route exact path='/forms' component={FormsNavPage} />
        <Route exact path='/modals' component={ModalsNavPage} />
        <Route exact path='/navigation' component={NavigationNavPage} />
        <Route exact path='/tables' component={TablesNavPage} />
        {/* FREE }*/
        /*<Route path='/addons/iframe' component={IframePage} />
        <Route path='/addons/edge-header' component={EdgeHeaderPage} />
        <Route path='/addons/notifications' component={NotificationPage} />
        <Route path='/addons/treeview' component={TreeviewPage} />
        <Route path='/addons/Rating' component={RatingPage} />
        <Route path='/advanced/carousel' component={CarouselPage} />
        <Route path='/advanced/collapse' component={CollapsePage} />
        <Route path='/advanced/videocarousel' component={VideoCarouselPage} />
        <Route path='/advanced/videocarousel' component={VideoCarouselPage} />
        <Route path='/advanced/alerts' component={AlertPage} />
        <Route path='/advanced/popover' component={PopoverPage} />
        <Route path='/advanced/tooltips' component={TooltipsPage} />
        <Route path='/advanced/charts' component={ChartsPage} />
        <Route path='/advanced/scrollbar' component={ScrollBarPage} />
        <Route path='/css/animations' component={AnimationPage} />
        <Route path='/css/icons' component={FaPage} />
        <Route path='/css/jumbotron' component={JumbotronPage} />
        <Route path='/css/masks' component={MasksPage} />
        <Route path='/css/hover' component={HoverPage} />
        <Route path='/css/masonry' component={MasonryPage} />
        <Route path='/components/media' component={MediaPage} />
        <Route path='/components/badge' component={BadgePage} />
        <Route path='/components/cards' component={CardsPage} />
        <Route path='/components/buttons' component={ButtonPage} />
        <Route path='/components/dropdown' component={DropdownPage} />
        <Route path='/components/progress' component={ProgressPage} />
        <Route path='/components/pagination' component={PaginationPage} />
        <Route path='/components/list-group' component={ListGroupPage} />
        <Route path='/components/panels' component={PanelPage} />
        <Route path='/components/search' component={SearchPage} />
        <Route path='/components/spinner' component={SpinnerPage} />
        <Route path='/components/tabs' component={TabsPage} />
        <Route path='/components/pills' component={PillsPage} />
        <Route path='/forms/forms' component={FormsPage} />
        <Route path='/forms/validation' component={ValidationPage} />
        <Route path='/forms/input' component={InputPage} />
        <Route path='/forms/inputgroup' component={InputGroupPage} />
        <Route path='/modals/modal' component={ModalPage} />
        <Route path='/modals/modal-form' component={ModalFormPage} />
        <Route path='/modals/modal-examples' component={ModalExamplesPage} />
        <Route path='/navigation/navbar' component={NavbarPage} />
        <Route path='/navigation/breadcrumb' component={BreadcrumbPage} />
        <Route path='/navigation/navs' component={NavsPage} />
        <Route path='/navigation/footer' component={FooterPage} />
        <Route path='/tables/table' component={TablePage} />
        <Route path='/tables/table-responsive' component={TableResponsivePage} />
        <Route path='/tables/table-scroll' component={TableScrollPage} />
        <Route path='/tables/table-styles' component={TableStylesPage} />
        <Route path='/tables/datatable-api' component={DatatableApiPage} />
        <Route path='/tables/datatable' component={DatatablePage} />
        <Route path='/tables/datatable-2' component={DatatablePageV5} />
        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>*/
      <div><h1>Hello</h1></div>
    );
  }
}

export default Routes;
