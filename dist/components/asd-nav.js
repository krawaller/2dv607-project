'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _bsNav = require('./bs-nav');

var _bsNav2 = _interopRequireDefault(_bsNav);

var _routesParser = require('./routes-parser');

var _routesParser2 = _interopRequireDefault(_routesParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsdNav = (function (_Component) {
    _inherits(AsdNav, _Component);

    function AsdNav() {
        _classCallCheck(this, AsdNav);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AsdNav).apply(this, arguments));
    }

    _createClass(AsdNav, [{
        key: 'getLinks',
        value: function getLinks() {
            var routes = this.props.routes[0] || [];
            return (0, _routesParser2.default)(routes);
        }
    }, {
        key: 'render',
        value: function render() {
            var links = this.getLinks(),
                config = this.props.config || {};
            if (!config.id) {
                config.id = 'asd-nav';
            }
            if (config.bootstrap) {
                return _react2.default.createElement(_bsNav2.default, { config: config, links: links });
            }
            return _react2.default.createElement(
                'div',
                { id: config.id },
                _react2.default.createElement(_list2.default, { config: config, links: links })
            );
        }
    }]);

    return AsdNav;
})(_react.Component);

exports.default = AsdNav;