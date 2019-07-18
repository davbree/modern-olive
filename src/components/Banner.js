import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames} from '../utils';

export default class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <div className="content">
                    <div className="inner">
                        <header>
                            <h2>{this.props.pageContext.frontmatter.banner.title}</h2>
                            {markdownify(this.props.pageContext.frontmatter.banner.subtitle)}
                        </header>
                        {this.props.pageContext.frontmatter.banner.actions && 
                            <ul className="actions">
                                {_.map(this.props.pageContext.frontmatter.banner.actions, (action, action_idx) => (
                                    <li key={action_idx}><Link to={(action.url.startsWith('#') ? action.url : safePrefix(action.url))} className={classNames('button', {'primary': action.is_primary}, {'scrolly': action.is_scrolly}, {'huge': action.is_huge})}>{action.label}</Link></li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
            </section>
        );
    }
}
