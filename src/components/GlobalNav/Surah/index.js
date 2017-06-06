import React, { PropTypes, Component } from 'react';
import * as customPropTypes from 'customPropTypes';
import * as OptionsActions from 'redux/actions/options.js';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import Link from 'react-router/lib/Link';
import Drawer from 'quran-components/lib/Drawer';
import Menu from 'quran-components/lib/Menu';
import SearchInput from 'components/SearchInput';
import SurahsDropdown from 'components/SurahsDropdown';
import Settings from 'components/Settings';
import LocaleFormattedMessage from 'components/LocaleFormattedMessage';
import VersesDropdown from 'components/VersesDropdown';

import { load, setCurrentVerse } from 'redux/actions/verses.js';

import GlobalNav from '../index';

const styles = require('../style.scss');

class GlobalNavSurah extends Component {
  state = {
    drawerOpen: false
  };

  handleOptionChange = (payload) => {
    const { chapter, setOption, options, versesIds } = this.props;

    setOption(payload);

    if (chapter) {
      const from = [...versesIds][0];
      const to = [...versesIds][[...versesIds].length - 1];
      const paging = { offset: from - 1, limit: to - from + 1 };
      this.props.load(chapter.chapterNumber, paging, {
        ...options,
        ...payload
      });
    }
  };

  handleVerseDropdownClick = (verseNum) => {
    const { versesIds, chapter } = this.props; // eslint-disable-line no-shadow

    this.props.setCurrentVerse(`${chapter.chapterNumber}:${verseNum}`);

    if (versesIds.has(verseNum)) {
      return false;
    }

    const to = Math.min(...[verseNum + 10, chapter.versesCount]);

    return this.props.replace(
      `/${chapter.chapterNumber}/${verseNum}-${to}`
    );
  };

  handleDrawerToggle = (open) => {
    this.setState({ drawerOpen: open });
  };

  renderDrawerToggle(visibleXs) {
    return (
      <li>
        <a
          tabIndex="-1"
          className={`pointer ${visibleXs && 'visible-xs visible-sm'}`}
          onClick={() => this.handleDrawerToggle(true)}
        >
          <i className="ss-icon ss-settings text-align" />
          <LocaleFormattedMessage
            id="setting.title"
            defaultMessage="Settings"
          />
        </a>
      </li>
    );
  }

  render() {
    const {
      chapter,
      chapters,
      setOption,
      versesIds,
      options,
      ...props
    } = this.props;

    return (
      <GlobalNav
        {...props}
        leftControls={[
          <SurahsDropdown chapter={chapter} chapters={chapters} />,
          <VersesDropdown
            chapter={chapter}
            isReadingMode={options.isReadingMode}
            loadedVerses={versesIds}
            onClick={this.handleVerseDropdownClick}
          />,
          <div className="navbar-form navbar-left hidden-xs hidden-sm">
            <SearchInput className="search-input" />
          </div>,
          <li className="visible-xs-inline-block visible-sm-inline-block">
            <Link to="/search">
              <i
                className="ss-icon ss-search"
                style={{ verticalAlign: 'sub' }}
              />
            </Link>
          </li>,
          this.renderDrawerToggle(true),
          <Drawer
            right
            drawerClickClose={false}
            open={this.state.drawerOpen}
            handleOpen={this.handleDrawerToggle}
            toggle={<noscript />}
            header={
              <h4>
                <LocaleFormattedMessage
                  id="setting.title"
                  defaultMessage="Settings"
                />
              </h4>
            }
          >
            <Settings />
          </Drawer>
        ]}
        rightControls={[this.renderDrawerToggle()]}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chapterId = parseInt(ownProps.params.chapterId, 10);
  const chapter: Object = state.chapters.entities[chapterId];
  const verses: Object = state.verses.entities[chapterId];
  const versesArray = verses
    ? Object.keys(verses).map(key => parseInt(key.split(':')[1], 10))
    : [];
  const versesIds = new Set(versesArray);

  return {
    chapter,
    chapters: state.chapters.entities,
    options: state.options,
    versesIds
  };
}

GlobalNavSurah.propTypes = {
  chapter: customPropTypes.surahType.isRequired,
  chapters: customPropTypes.chapters.isRequired,
  options: customPropTypes.optionsType.isRequired,
  setOption: PropTypes.func.isRequired,
  versesIds: PropTypes.instanceOf(Set),
  load: PropTypes.func.isRequired,
  setCurrentVerse: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  ...OptionsActions,
  load,
  replace,
  setCurrentVerse
})(GlobalNavSurah);
